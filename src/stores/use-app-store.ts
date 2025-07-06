import { SetStateAction } from 'react';
import create, { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTrackedSelector } from 'react-tracked';
import createAdminSiteSlice, { AdminSiteState } from 'stores/create-admin-site-slice';
import createManagePageSlice, { ManagePageState } from 'stores/create-manage-page-slice';

export type AppState = AdminSiteState & ManagePageState;

export type SliceCreator<T> = StateCreator<AppState, [
  ['zustand/devtools', never]
], [], T>;


export const extractValue = <S, T>(state: S, value: SetStateAction<T>, key: string) => ({
  [key]: typeof value === 'function'
    ? (value as (prevState: T) => T)(state[key as keyof S] as unknown as T)
    : value,
});

//Tạo store cho toàn bộ ứng dụng, bao gồm các slice như AdminSite và ManagePage
const useAppStore = create<AppState>()(
  devtools(
    (...methods) => ({
      ...createAdminSiteSlice(...methods),
      ...createManagePageSlice(...methods),
    }),
    {
      name: 'AppStore',
      anonymousActionType: 'AppStore',
    }
  )
);

export default createTrackedSelector(useAppStore);
