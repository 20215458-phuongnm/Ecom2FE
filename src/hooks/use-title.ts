import Titles from 'constants/Titles';
import { matchRoutes, useLocation } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';

const routes = Object.keys(Titles).map(title => ({ path: title }));

// Hook để quản lý tiêu đề trang
// '/home', tiêu đề sẽ là 'Trang chủ 
function useTitle(explicitTitle?: string) {
  const location = useLocation();
  const match = matchRoutes(routes, location);
  const path = match ? match[0].route.path : '';

  useDocumentTitle(explicitTitle ? explicitTitle + ' – Electro' : Titles[path]);
}

export default useTitle;
