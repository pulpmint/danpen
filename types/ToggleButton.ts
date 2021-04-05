import { ReactElement } from "react";

export interface IToggleButton {
  label: string;
  icon: ReactElement;
  toggleValue: boolean;
  toggle: Function;
}
