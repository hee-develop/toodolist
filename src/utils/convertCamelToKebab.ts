import TypeFromCamelToKebab from './TypeFromCamelToKebab';

const convertCamelToKebab = <T extends string>(camelString: T): TypeFromCamelToKebab<T> => {
  return camelString.replace(/([A-Z]{1})/g, ($1) => `-${$1.toLowerCase()}`) as TypeFromCamelToKebab<T>;
};

export default convertCamelToKebab;
