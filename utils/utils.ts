export const transformQueryParam = (str: string) =>
  str
    .split('-')
    .reduce((acc, word) => acc + ' ' + word.charAt(0).toUpperCase() + word.slice(1), '');
