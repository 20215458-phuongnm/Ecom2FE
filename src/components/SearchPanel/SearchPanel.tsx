import React from 'react';
import { ActionIcon, Button, Group, Paper, Select, TextInput, Tooltip } from '@mantine/core';
import { AdjustmentsHorizontal, Edit, Eraser, Filter, Search } from 'tabler-icons-react';
import useSearchPanelViewModel from 'components/SearchPanel/SearchPanel.vm';

//SearchPanel tại trang
function SearchPanel() {
  const {
    searchInputRef,
    filterSelectList,
    activeFilterId,
    handleSearchInput,
    handleFilterSelect,
    handleAddFilterButton,
    handleResetButton,
    handleSearchButton,
  } = useSearchPanelViewModel();

  return (
    <Paper shadow="xs" p="sm">
      <Group position="apart">
        <Group spacing="sm">
          <TextInput
            placeholder="Từ khóa"
            icon={<Search size={14}/>}
            sx={{ width: 250 }}
            ref={searchInputRef}
            onKeyDown={handleSearchInput}
          />
        </Group>

        <Group spacing="sm">
          <Tooltip label="Đặt mặc định" withArrow>
            <ActionIcon
              color="red"
              variant="filled"
              size={36}
              onClick={handleResetButton}
            >
              <Eraser/>
            </ActionIcon>
          </Tooltip>
          <Button onClick={handleSearchButton}>
            Tìm kiếm
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}

export default React.memo(SearchPanel);
