import React from 'react';
import { Group } from '@mantine/core';

//Quản lý tiêu đề của trang quản lý, hiển thị các nút chức năng
interface ManageHeaderProps {
  children: React.ReactNode;
}

function ManageHeader({
  children,
}: ManageHeaderProps) {

  return (
    <Group position="apart">
      {children}
    </Group>
  );
}

export default ManageHeader;
