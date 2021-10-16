import {
  FontSetting,
  IExportOptions,
  PaddingSetting
} from "../types/PanelSettings";

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
  { value: 2, label: "1x" },
  { value: 3, label: "2x" },
  { value: 4, label: "3x" }
];
