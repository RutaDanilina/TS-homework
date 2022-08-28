export type StringifyObjectProps<Type extends Object> = {
  [Key in keyof Type]: string
};

export const stringifyProps = <Type extends Object>(object: Type): StringifyObjectProps<Type> => {
  const objectLikeArray = Object.entries(object);

  const objectWithPropsStringified = objectLikeArray
    .reduce<Partial<StringifyObjectProps<Type>>>((prevObj, [key, value]) => ({
      ...prevObj,
      [key]: String(value),
    }), {});

  return objectWithPropsStringified as StringifyObjectProps<Type>;
};
