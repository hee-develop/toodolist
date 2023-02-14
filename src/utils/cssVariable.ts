import { css } from 'styled-components';
import Color from '../constants/Color';

import convertCamelToKebab from './convertCamelToKebab';
import TypeFromCamelToKebab from './TypeFromCamelToKebab';

export type CSSVariableName<S extends string = string> = `--${TypeFromCamelToKebab<S>}`;

type ComponentTheme = {
  light: Color;
  dark: Color;
};
export type ComponentThemeMap<K extends string> = Record<K, ComponentTheme>;

/** :root에 CSS variables를 추가 */
export const initializeCssVariables = <K extends string>(componentThemeMap: ComponentThemeMap<K>) => {
  const componentThemeTuple = Object.entries<ComponentTheme>(componentThemeMap);

  const { lights, darks } = componentThemeTuple.reduce<{
    lights: CSSVariableName[];
    darks: CSSVariableName[];
  }>(
    (acc, [componentName, { light, dark }]) => {
      acc.lights.push(`--${convertCamelToKebab(componentName)}: ${light};`);
      acc.darks.push(`--${convertCamelToKebab(componentName)}: ${dark};`);
      return acc;
    },
    { lights: [], darks: [] }
  );

  return css`
    :root {
      ${lights.join('\n')}
    }

    @media (prefers-color-scheme: dark) {
      :root {
        ${darks.join('\n')}
      }
    }
  `;
};

/** Theme map에서 CSS variable을 반환 */
export const getCssVariableName = <K extends string>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  targetMap: ComponentThemeMap<K>
): ((key: K) => `--${TypeFromCamelToKebab<K>}`) => {
  return (key) => `--${convertCamelToKebab(key)}`;
};
