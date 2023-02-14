import { useCallback } from 'react';
import { ComponentThemeMap, getCssVariableName } from '../utils/cssVariable';

const useCssVariable = <K extends string>(themeMap: ComponentThemeMap<K>) => {
  const getCssVar = useCallback(getCssVariableName(themeMap), [getCssVariableName, themeMap]);

  return {
    getCssVar,
  };
};

export default useCssVariable;
