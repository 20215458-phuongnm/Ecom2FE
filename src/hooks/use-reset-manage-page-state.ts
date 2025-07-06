import useAppStore from 'stores/use-app-store';
import { useEffect } from 'react';

// Hook để reset trạng thái của trang quản lý (tránh bị lỗi khi chuyển trang)
function useResetManagePageState() {
  const { resetManagePageState } = useAppStore();

  useEffect(() => {
    resetManagePageState();
  }, [resetManagePageState]);
}

export default useResetManagePageState;
