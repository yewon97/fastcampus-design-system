import { createElement, forwardRef, Ref } from "react";
import { TextProps } from "./types";
import { vars } from "@fastcampus/themes";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: Ref<HTMLElement>) => {
  const {
    as = "p",
    color = "gray",
    background,
    fontSize,
    children,
    ...rest
  } = props;

  console.log("TextStyle", textStyle({ fontSize }));
  console.log(
    "StyleSprinkles",
    StyleSprinkles(
      extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
    ),
  );

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({ fontSize }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Text = forwardRef(Text);
export { _Text as Text };
