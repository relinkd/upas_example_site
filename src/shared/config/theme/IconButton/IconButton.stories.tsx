import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import { IconButton, Stack } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'theme/IconButton',
  component: IconButton,
  argTypes: { size: { control: 'select', options: ['small', 'medium', 'large'] } },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <Stack direction="row" spacing={2}>
    <IconButton {...args}>
      <CropFreeOutlinedIcon />
    </IconButton>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {};
