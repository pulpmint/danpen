import { FC } from "react";

interface LogoProps {
  size?: number;
}

const Logo: FC<LogoProps> = ({ size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 384 384"
      width={size}
      height={size}
    >
      <defs>
        <clipPath id="a12b591e-92cd-4d97-8fe8-92660dc766f3">
          <circle cx="192" cy="192" r="192" fill="none" />
        </clipPath>
      </defs>
      <g id="f3e5f7b7-1a1a-4f2a-aeb4-279e408c24b8" data-name="Layer 2">
        <g id="a6d1ed3f-8a5c-43c8-9b20-12cfd6f76212" data-name="Logo">
          <g clipPath="url(#a12b591e-92cd-4d97-8fe8-92660dc766f3)">
            <rect width="384" height="75.75" fill="#e53e3e" />
            <path
              d="M0,102.75H184.13A37.87,37.87,0,0,1,222,140.62v0a37.87,37.87,0,0,1-37.87,37.87H0a0,0,0,0,1,0,0V102.75a0,0,0,0,1,0,0Z"
              fill="#e53e3e"
            />
            <path
              d="M334.87,205.5H384a0,0,0,0,1,0,0v75.75a0,0,0,0,1,0,0H334.87A37.87,37.87,0,0,1,297,243.38v0a37.87,37.87,0,0,1,37.87-37.87Z"
              fill="#e53e3e"
            />
            <path
              d="M0,308.25H139.13A37.87,37.87,0,0,1,177,346.12v0A37.87,37.87,0,0,1,139.13,384H0a0,0,0,0,1,0,0V308.25a0,0,0,0,1,0,0Z"
              fill="#e53e3e"
            />
            <path
              d="M0,205.5H232.13A37.87,37.87,0,0,1,270,243.37v0a37.87,37.87,0,0,1-37.87,37.87H0a0,0,0,0,1,0,0V205.5A0,0,0,0,1,0,205.5Z"
              fill="#e53e3e"
            />
            <path
              d="M241.87,308.25H384a0,0,0,0,1,0,0V384a0,0,0,0,1,0,0H241.87A37.87,37.87,0,0,1,204,346.13v0A37.87,37.87,0,0,1,241.87,308.25Z"
              fill="#e53e3e"
            />
            <path
              d="M286.87,102.75H384a0,0,0,0,1,0,0V178.5a0,0,0,0,1,0,0H286.87A37.87,37.87,0,0,1,249,140.63v0a37.87,37.87,0,0,1,37.87-37.87Z"
              fill="#e53e3e"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
