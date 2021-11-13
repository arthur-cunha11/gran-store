export const mobileDevice = () => {
  return matchMedia("(max-width: 1200px)").matches;
};
