export interface Gradient {
  name: string;
  value: string;
}

export type PaddingSetting = 16 | 24 | 32;

export type FontSetting =
  | "Fira Code"
  | "IBM Plex Mono"
  | "Roboto Mono"
  | "Source Code Pro"
  | "Space Mono"
  | "Ubuntu Mono";

export type ExportSize = 2 | 3 | 4;

export interface IExportOptions {
  value: ExportSize;
  label: string;
}
