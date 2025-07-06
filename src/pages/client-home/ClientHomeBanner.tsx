// Thêm dòng này ở đầu tệp
import React from 'react';

import {
  Box,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core';
import { Car, HeartHandshake, Star} from 'tabler-icons-react';
import { ClientCarousel } from 'components';

const useStyles = createStyles((theme) => ({
  rightBanner: {
    flexWrap: 'unset',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
    borderRadius: theme.radius.md
  },
}));

function ClientHomeBanner() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={7} lg={8}>
        {/* <ClientCarousel>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(105, theme.colors.teal[3], theme.colors.lime[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.orange[3], theme.colors.red[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.indigo[3], theme.colors.cyan[3]),
            }}
          >
          </Box>
        </ClientCarousel> */}
        <ClientCarousel>
          <Box>
            <img
              src='https://assets.nintendo.eu/image/upload/f_auto/q_auto/v1737030143/NAL/Pages/Web/yizoj8tewr/thumbnail.jpg'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_bannerXS.jpg'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://www.artfulpokemon.com/wp-content/uploads/2024/09/Blog-Post-Header-4.png'
              alt='Description of image 1'
              style={{ height: 200, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://pbs.twimg.com/media/FplaMv2WIAALjhU.jpg:large'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
        </ClientCarousel>
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Stack>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Car size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Miễn phí vận chuyển
              </Text>
              <Text size='sm'>
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Star size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Bảo hành rất lâu
              </Text>
              <Text size='sm'>
                Nếu chất liệu da bong tróc hoặc sản phẩm bị lỗi kỹ thuật,....
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <HeartHandshake size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Đổi trả 1-1 hoặc hoàn tiền
              </Text>
              <Text size='sm'>
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                nhu cầu.
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ClientHomeBanner;
