export const calculateCols = length => {
  switch (length) {
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 3;
    default:
      return 3;
  }
};
