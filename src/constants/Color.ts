const Color = {
  white: 'hsl(58, 5%, 98%)',
  black: 'hsl(35, 1%, 10%)',
  gray050: 'hsl(46, 0%, 88%)',
  gray100: 'hsl(46, 0%, 84%)',
  gray200: 'hsl(46, 0%, 76%)',
  gray300: 'hsl(46, 0%, 68%)',
  gray400: 'hsl(46, 1%, 60%)',
  gray500: 'hsl(46, 1%, 52%)',
  gray600: 'hsl(46, 1%, 44%)',
  gray700: 'hsl(46, 2%, 36%)',
  gray800: 'hsl(46, 2%, 28%)',
  gray900: 'hsl(46, 2%, 20%)',
  grayAlpha10: 'hsla(46, 1%, 100%, 0.2)',
  grayAlpha20: 'hsla(46, 1%, 95%, 0.28)',
  grayAlpha30: 'hsla(46, 1%, 90%, 0.36)',
  grayAlpha40: 'hsla(46, 1%, 85%, 0.44)',
  grayAlpha50: 'hsla(46, 1%, 80%, 0.52)',
  grayAlpha60: 'hsla(46, 1%, 75%, 0.60)',
  grayAlpha70: 'hsla(46, 1%, 70%, 0.76)',
  grayAlpha80: 'hsla(46, 1%, 65%, 0.84)',
  grayAlpha90: 'hsla(46, 1%, 60%, 0.92)',
} as const;
type Color = (typeof Color)[keyof typeof Color];

export default Color;
