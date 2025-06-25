import "@fastcampus/react-components-layout/style.css";
import { Text as _Text } from "@fastcampus/react-components-layout";
import { classes } from "@fastcampus/themes";

export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      control: { type: "select" },
      options: Object.keys(classes.typography.text),
    },
  },
};

export const TextStory = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "Hello, world!",
  },
};
