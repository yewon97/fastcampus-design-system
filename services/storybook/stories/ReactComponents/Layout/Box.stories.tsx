import "@fastcampus/react-components-layout/style.css";
import { Box as _Box } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    boxShadow: {
      control: { type: "select" },
      options: Object.keys(vars.box.shadows), // ["sm", "md", "lg"]
    },
    borderRadius: {
      control: { type: "select" },
      options: Object.keys(vars.box.radii),
    },
    padding: {
      control: { type: "select" },
      options: Object.keys(vars.box.spacing),
    },
  },
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    color: "red",
    background: "blue",
    boxShadow: "md",
    borderRadius: "md",
  },
};
