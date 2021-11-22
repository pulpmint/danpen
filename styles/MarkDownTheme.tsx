import { FC } from "react";
import { theme } from "../config/theme";

const MarkDownTheme: FC = () => {
  return (
    <style jsx global>{`
      .markdown-theme p {
        margin-bottom: ${theme.space[6]};
      }

      .markdown-theme p:last-child {
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.gray[500]};
      }

      .markdown-theme p a {
        font-weight: ${theme.fontWeights.medium};
        color: ${theme.colors.blue[300]};
        transition-property: all;
        transition-duration: ${theme.transition.duration.normal};
      }

      .markdown-theme p a:hover {
        color: ${theme.colors.blue[400]};
      }

      .markdown-theme p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  );
};

export default MarkDownTheme;
