import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "input" | "span" | "div";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
};

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
  (
    props: BaseButtonProps<"button">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<HTMLButtonElement>;
  (
    props: BaseButtonProps<"a">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<HTMLAnchorElement>;
  (
    props: BaseButtonProps<"input">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<HTMLInputElement>;
  (
    props: BaseButtonProps<"span">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<HTMLSpanElement>;
  (
    props: BaseButtonProps<"div">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<HTMLDivElement>;
};
