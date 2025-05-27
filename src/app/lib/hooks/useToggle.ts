"use client";

import { useState } from "react";

// Hook para manejar el estado de un toggle
export const useToggle = (
  initialState: boolean = false,
): {
  isToggleOpen: boolean;
  handlerToggle: () => void;
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(initialState);

  const handlerToggle = (): void => {
    setIsToggleOpen(!isToggleOpen);
  };

  return { isToggleOpen, handlerToggle, setIsToggleOpen };
};
