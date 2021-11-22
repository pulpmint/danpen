import { IColorValues } from "../types/misc";
import { theme } from "./theme";

const GRAY = theme.colors.gray;

export const BACKGROUND_COLOR: IColorValues = { light: "white", dark: GRAY[900] };
export const ICON_BACKGROUND: IColorValues = { light: GRAY[100], dark: GRAY[800] };
export const ICON_BACKGROUND_HOVER: IColorValues = { light: GRAY[200], dark: GRAY[700] };
export const TEXT_HIGHLIGHT: IColorValues = { light: GRAY[600], dark: GRAY[400] };
export const TEXT: IColorValues = { light: GRAY[800], dark: GRAY[50] };
