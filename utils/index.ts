export const removeProtocol = (input: string) => {
  return input.replace(/^(http|https|ftp):\/\//, '');
};
