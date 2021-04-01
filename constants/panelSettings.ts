import { FontSetting, IExportOptions, PaddingSetting } from "../types/PanelSettings";

export const PADDING: PaddingSetting[] = [8, 16, 32];

export const FONTSTYLE: FontSetting[] = [
  "Fira Code",
  "IBM Plex Mono",
  "Roboto Mono",
  "Source Code Pro",
  "Space Mono",
  "Ubuntu Mono"
];

export const EXPORTSIZE: IExportOptions[] = [
  { value: 2, label: "Small" },
  { value: 3, label: "Medium (Default)" },
  { value: 4, label: "Large" }
];
