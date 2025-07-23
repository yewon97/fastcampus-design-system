import { useCallback, useState } from "react";
import { ToggleProps, UseToggleReturn } from "./types";

export const useToggle = ({
  isSelected = false,
}: ToggleProps): UseToggleReturn => {
  const [toggle, setToggle] = useState(isSelected);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    isSelected: toggle,
    setSelected: setToggle,
    toggle: handleToggle,
  };
};
