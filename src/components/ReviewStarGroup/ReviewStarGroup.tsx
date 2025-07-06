import { Group, useMantineTheme } from '@mantine/core';
import { Star } from 'tabler-icons-react';
import React from 'react';

/// Hiển thị nhóm sao đánh giá
// Nhận vào điểm đánh giá và hiển thị
function ReviewStarGroup({ ratingScore }: { ratingScore: number }) {
  const theme = useMantineTheme();

  return (
    <Group spacing={5}>
      {Array(5).fill(0).map((_, index) => (
        <Star
          key={index}
          color={index < ratingScore ? theme.colors.yellow[5] : theme.colors.gray[5]}
          fill={index < ratingScore ? theme.colors.yellow[5] : theme.colors.gray[5]}
          size={14}
        />
      ))}
    </Group>
  );
}

export default ReviewStarGroup;
