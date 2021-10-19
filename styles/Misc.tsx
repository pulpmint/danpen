import { FC } from "react";

import "focus-visible/dist/focus-visible";

const Misc: FC = () => {
  return (
    <style jsx global>{`
      .js-focus-visible :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }
    `}</style>
  );
};

export default Misc;
