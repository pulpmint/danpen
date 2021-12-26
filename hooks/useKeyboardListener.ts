import { useEffect, useState } from "react";

interface useKeyboardListenerProps {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  meta?: boolean;
  preventDefault?: boolean;
}

const useKeyboardListener = ({
  ctrl = false,
  alt = false,
  shift = false,
  meta = false,
  key,
  preventDefault = false
}: useKeyboardListenerProps) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = e => {
    if (
      e.key === key &&
      e.shiftKey === shift &&
      e.ctrlKey === ctrl &&
      e.altKey === alt &&
      e.metaKey === meta &&
      e.target.nodeName !== "TEXTAREA" &&
      e.target.nodeName !== "INPUT" &&
      !e.target.isContentEditable
    ) {
      if (preventDefault) e.preventDefault();
      setKeyPressed(true);
    }
  };

  const upHandler = e => {
    if (e.key === key) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyboardListener;
