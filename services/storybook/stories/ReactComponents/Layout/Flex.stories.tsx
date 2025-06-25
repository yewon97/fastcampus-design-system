import "@fastcampus/react-components-layout/style.css";
import { Flex as _Flex } from "@fastcampus/react-components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },

  render: (args) => (
    <_Flex {...args}>
      <div>Hello</div>
      <div>World</div>
    </_Flex>
  ),
};
