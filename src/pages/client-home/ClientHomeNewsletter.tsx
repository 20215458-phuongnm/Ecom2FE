import React, { useState } from 'react';
import { Card, Group, Text, TextInput, useMantineTheme, Button } from '@mantine/core';
import { At, Mailbox } from 'tabler-icons-react';

// Giả lập nội dung file
const simulatedFileContent = 'Tính năng NEWS chưa được triển khai. Đợi nhé hihi.';

function ClientHomeNewsletter() {
  const theme = useMantineTheme();
  const [email, setEmail] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (email.endsWith('@gmail.com')) {
      // Giả lập việc đọc file
      setFileContent(simulatedFileContent);
    } else {
      setFileContent('');
    }
  };

  return (
    <Card
      radius="md"
      shadow="sm"
      p="lg"
      sx={{
        backgroundColor: '#D64B3B',
        color: 'white',
      }}
    >

      <Group position="apart">
        <Group>
          <Mailbox size={40} strokeWidth={1} />
          <Text weight={500} sx={{ fontSize: theme.fontSizes.xl }}>
            Đăng ký nhận tin
          </Text>
          <Text sx={{ fontSize: theme.fontSizes.md }}>
            và cập nhật khuyến mãi liên tục...
          </Text>
        </Group>
        <Group>
          <TextInput
            styles={{
              root: { width: 450 },
              icon: { color: theme.white },
              input: {
                color: theme.white,
                border: 'none',
                backgroundColor: theme.fn.rgba(theme.colors.blue[1], 0.25),

                '&::placeholder': {
                  color: theme.fn.rgba(theme.colors.gray[0], 0.5),
                },
              },
            }}
            value={email}
            onChange={handleEmailChange}
            placeholder="Địa chỉ email"
            radius="md"
            size="md"
            icon={<At size={16} />}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#FFAA47',
              color: 'white',
              '&:hover': {
                backgroundColor: '#e89b3f', // hoặc darken nhẹ màu gốc
              },
            }}
          >
            Gửi
          </Button>


        </Group>
      </Group>
      {fileContent && (
        <Text mt="md">
          {fileContent}
        </Text>
      )}
    </Card>
  );
}

export default ClientHomeNewsletter;
