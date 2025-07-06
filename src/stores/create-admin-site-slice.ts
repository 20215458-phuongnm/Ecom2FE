import { SliceCreator } from 'stores/use-app-store';

// Định nghĩa kiểu dữ liệu cho trạng thái của AdminSite
export interface AdminSiteState {
  opened: boolean;
  toggleOpened: () => void;
}

const initialAdminSiteState = {
  opened: false,
};

// Tạo slice (1 phần state) cho AdminSite với các phương thức và trạng thái ban đầu
const createAdminSiteSlice: SliceCreator<AdminSiteState> = (set) => ({
  ...initialAdminSiteState,
  toggleOpened: () => set((state) => ({ opened: !state.opened })),
});

export default createAdminSiteSlice;
