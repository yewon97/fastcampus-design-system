import { useToggle } from "@fastcampus/react-hooks-toggle";
import { OverloadedToggleButtonFunction } from "./types";
import { useButton } from "./useButton";

export const useToggleButton: OverloadedToggleButtonFunction = (
  props: any,
  isSelected?: boolean,
) => {
  const { isSelected: _isSelected, toggle } = useToggle({ isSelected });

  const handleClick = (event: React.MouseEvent) => {
    toggle();
    props?.onClick?.(event);
  };

  const { buttonProps } = useButton({ ...props, onClick: handleClick });

  return {
    buttonProps,
    isSelected: _isSelected,
  };
};
