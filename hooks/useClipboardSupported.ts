import { useEffect, useState } from "react";

const useClipboardSupport = () => {
  const [isClipboardSupported, setClipboardSupport] = useState(false);

  useEffect(() => {
    setClipboardSupport(
      window.navigator &&
        window.navigator.clipboard &&
        typeof ClipboardItem === "function"
    );
  }, []);

  return isClipboardSupported;
};

export default useClipboardSupport;
