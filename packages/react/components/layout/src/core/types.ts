import { vars } from "@fastcampus/themes";
import { StyleSprinkles } from "./style.css";
import { JSX } from "react";

type AsProps = {
  as?:
    | Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>
    | string;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
