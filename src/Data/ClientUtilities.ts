export const ConvertToPascalObjectKey = (obj: object) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const pascalCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
    return { ...acc, [pascalCaseKey]: value };
  }, {});
};