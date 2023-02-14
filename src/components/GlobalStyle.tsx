import { createGlobalStyle } from 'styled-components';

import DefaultTheme from '../constants/DefaultTheme';
import { initializeCssVariables } from '../utils/cssVariable';

const GlobalStyle = createGlobalStyle`
  ${initializeCssVariables(DefaultTheme)}
`;

export default GlobalStyle;
