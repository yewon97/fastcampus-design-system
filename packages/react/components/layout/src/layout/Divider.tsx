import { vars } from "@fastcampus/themes";
import { DividerProps } from "./types";
import { forwardRef, Ref } from "react";

const Divider = (props: DividerProps, ref: Ref<HTMLHRElement>) => {
  const {
    orientation = "horizontal",
    color = "gray",
    size = 1,
    variant = "solid",
  } = props;

  const borderStyle =
    orientation === "horizontal"
      ? {
          width: "100%",
          borderWidth: `0 0 ${size}px 0`,
        }
      : {
          height: "100%",
          borderWidth: `0 0 0 ${size}px`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        borderStyle: variant,
        borderColor: color && vars.colors.$scale?.[color]?.[200],
        ...borderStyle,
        ...props.style,
      }}
    />
  );
};

const _Divider = forwardRef(Divider);

export { _Divider as Divider };
