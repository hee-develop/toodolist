import { ComponentThemeMap } from '../utils/cssVariable';
import Color from './Color';

const DefaultTheme = {
  appBackground: {
    light: Color.gray050,
    dark: Color.gray900,
  },
  todoItemTitle: {
    light: Color.gray900,
    dark: Color.gray050,
  },
  todoItemText: {
    light: Color.gray800,
    dark: Color.gray100,
  },
  todoItemFinishedText: {
    light: Color.gray200,
    dark: Color.gray500,
  },
} as const satisfies ComponentThemeMap<string>;

export default DefaultTheme;
