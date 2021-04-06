import { FC } from "react";
import { theme } from "../config/theme";
import usePanelSettings from "../hooks/usePanelSettings";

const MarkDownTheme: FC = () => {
  const { darkMode } = usePanelSettings();

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
        color: ${darkMode ? theme.colors.blue[300] : theme.colors.blue[500]};
        transition-property: all;
        transition-duration: ${theme.transition.duration.normal};
      }

      .markdown-theme p a:hover {
        color: ${darkMode ? theme.colors.blue[400] : theme.colors.blue[600]};
      }
    `}</style>
  );
};

export default MarkDownTheme;
