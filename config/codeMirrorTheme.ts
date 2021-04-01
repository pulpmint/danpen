import { theme } from "./theme";

export interface ICodeMirrorTheme {
  fontColor: string;
  matchingBracketColor: string;
  selection: string;
  lineNumberColor: string;
  stringColor: string;
  numberColor: string;
  variableColor: string;
  operatorColor: string;
  propsColor: string;
  typeColor: string;
}

const lightTheme: ICodeMirrorTheme = {
  fontColor: theme.colors.gray[800],
  matchingBracketColor: theme.colors.black,
  selection: theme.colors.gray[300],
  lineNumberColor: theme.colors.gray[500],
  stringColor: theme.colors.yellow[700],
  numberColor: theme.colors.purple[700],
  variableColor: theme.colors.green[700],
  operatorColor: theme.colors.pink[700],
  propsColor: theme.colors.cyan[700],
  typeColor: theme.colors.orange[700]
};

const darkTheme: ICodeMirrorTheme = {
  fontColor: theme.colors.gray[200],
  matchingBracketColor: theme.colors.white,
  selection: theme.colors.gray[700],
  lineNumberColor: theme.colors.gray[500],
  stringColor: theme.colors.yellow[300],
  numberColor: theme.colors.purple[300],
  variableColor: theme.colors.green[300],
  operatorColor: theme.colors.pink[300],
  propsColor: theme.colors.cyan[300],
  typeColor: theme.colors.orange[300]
};

export const getCodeMirrorTheme = (darkMode: boolean): ICodeMirrorTheme => {
  return darkMode ? darkTheme : lightTheme;
};
