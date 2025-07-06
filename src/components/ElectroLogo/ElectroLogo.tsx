import React from 'react';
// import { useMantineTheme } from '@mantine/core';

interface ElectroLogoProps {
  width?: number;
}

function ElectroLogo({ width = 60 }: ElectroLogoProps) {
  const imageUrl = '/loho-01.png';
 // Adjust the path as necessary

  return <img src={imageUrl} width={width} alt='MyGame Logo' style={{ marginTop: '50px' }} />;
}

export default ElectroLogo;
