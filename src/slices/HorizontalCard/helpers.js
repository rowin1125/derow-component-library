export const calculateWidth = (isText, layout) => {
  switch (layout) {
    case 'large_text':
      return isText ? 8 : 4;

    case 'even':
      return 6;

    case 'large_image':
      return isText ? 4 : 8;

    default:
      return 6;
  }
};
