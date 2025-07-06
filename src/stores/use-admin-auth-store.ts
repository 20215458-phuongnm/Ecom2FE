import { UserResponse } from 'models/User';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createTrackedSelector } from 'react-tracked';

//Quản lý trạng thái xác thực của quản trị viên
//Sử dụng Zustand để tạo store quản lý trạng thái xác thực của quản trị viên
//Bao gồm JWT token, thông tin người dùng và các phương thức cập nhật trạng thái
interface AdminAuthState {
  jwtToken: string | null;
  user: UserResponse | null;
}

interface AdminAuthAction {
  updateJwtToken: (value: string) => void;
  updateUser: (value: UserResponse) => void;
  resetAdminAuthState: () => void;
  isOnlyEmployee: () => boolean; 
}

const initialAuthState: AdminAuthState = {
  jwtToken: null,
  user: null,
};

// Tạo store Zustand với các phương thức và trạng thái ban đầu
const useAdminAuthStore = create<AdminAuthState & AdminAuthAction>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialAuthState,
        updateJwtToken: (value) => set(() => ({ jwtToken: value }), false, 'AdminAuthStore/updateJwtToken'),
        updateUser: (value) => set(() => ({ user: value }), false, 'AdminAuthStore/updateUser'),
        resetAdminAuthState: () => set(initialAuthState, false, 'AdminAuthStore/resetAdminAuthState'),
        isOnlyEmployee: () => {
          const user = get().user;
          return !!(user && !user.roles.map(role => role.code).includes('ADMIN'));
        },
      }),
      {
        name: 'electro-admin-auth-store',
        getStorage: () => localStorage,
      }
    ),
    {
      name: 'AdminAuthStore',
      anonymousActionType: 'AdminAuthStore',
    }
  )
);

// Reference: https://docs.pmnd.rs/zustand/integrations/persisting-store-data#how-can-i-rehydrate-on-storage-event?
// Lắng nghe sự kiện thay đổi trong localStorage và tự động cập nhật store (nhiều tab hoặc cửa sổ)
const withStorageDOMEvents = (store: typeof useAdminAuthStore) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };

  window.addEventListener('storage', storageEventCallback);

  return () => {
    window.removeEventListener('storage', storageEventCallback);
  };
};

withStorageDOMEvents(useAdminAuthStore);

export default createTrackedSelector(useAdminAuthStore);
