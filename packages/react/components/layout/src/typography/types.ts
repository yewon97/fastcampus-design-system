import { classes } from "@fastcampus/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "react";

export type TextProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof classes.typography.text;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };

export type HeadingProps = StyleProps &
  AsElementProps & {
    fontSize: keyof typeof classes.typography.heading;
  };
