import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Delete } from "@styled-icons/material-twotone/Delete";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Icon = Template.bind({});
Default.args = {
  Icon: Delete,
  children: "Delete",
};
