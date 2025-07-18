import { BaseButtonProps, OverloadedButtonFunction } from "./types";

export const useButton: OverloadedButtonFunction = (props: any) => {
  const {
    elementType = "button",
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
    type = "button",
    ...rest
  } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    onKeyDown?.(e);

    if (
      e.key === "Space" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.key === "32"
    ) {
      if (disabled) return;
      if (e.defaultPrevented) return;
      if (elementType === "button") return;

      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
      return;
    }

    if (e.key === "Enter" || e.key === "13") {
      if (disabled) return;
      if (e.defaultPrevented) return;
      if (elementType === "input" && type !== "button") return;

      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
      return;
    }
  };

  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (elementType) {
    case "button": {
      additionalProps = {
        type: type ?? "button",
        disabled,
      };
      break;
    }
    case "a": {
      const { href, target, rel } = props as BaseButtonProps<"a">;

      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        "area-disabled": isDisabled,
      };
      break;
    }
    case "input": {
      additionalProps = {
        role: "button",
        type: props.type,
        disabled,
        "area-disabled": undefined,
      };
      break;
    }
    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled,
      };
      break;
    }
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};
