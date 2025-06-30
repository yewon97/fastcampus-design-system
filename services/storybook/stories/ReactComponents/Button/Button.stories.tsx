import "@fastcampus/react-components-button/style.css";
import { Button as _Button } from "@fastcampus/react-components-button";
import { vars } from "@fastcampus/themes";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: Object.keys(vars.colors.$scale),
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
};

export const ButtonStory = {
  args: {
    children: "Button",
    variant: "outline",
    size: "md",
    color: "blue",
    isDisabled: true,
    isLoading: false,
  },
  render: (args) => (
    <_Button {...args} leftIcon={<div>👍</div>} rightIcon={<div>👍</div>} />
  ),
};
