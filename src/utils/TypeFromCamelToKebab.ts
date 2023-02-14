type TypeFromCamelToKebab<S extends string> = S extends `${infer A}${infer B}`
  ? A extends Capitalize<A>
    ? `-${Uncapitalize<A>}${TypeFromCamelToKebab<B>}`
    : `${A}${TypeFromCamelToKebab<B>}`
  : S;

export default TypeFromCamelToKebab;
