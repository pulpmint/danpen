import { FC } from "react";
import { ISVGProps } from "../../types/misc";

const MinusIcon: FC<ISVGProps> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
    >
      <title>Minus Circle</title>
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z" />
    </svg>
  );
};

export default MinusIcon;
