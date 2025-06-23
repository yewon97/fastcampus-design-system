import * as React from "react";
import { FlexProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@fastcampus/themes";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    align,
    basis,
    direction,
    grow,
    justify,
    shrink,
    wrap,
    gap,
    ...rest
  } = props;

  return React.createElement(
    as,
    {
      ...rest,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        flexBasis: basis,
        flexDirection: direction,
        flexGrow: grow,
        justifyContent: justify,
        flexShrink: shrink,
        flexWrap: wrap,
        gap: gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
