export const calculateCols = fields => {
  switch (fields.length) {
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 3;
    default:
      console.error('Please provide at least 2 and max 4 cards');
  }
};

export const calculateMarginClasses = (index, fields) => {
  let marginClass;
  if (index === 0) {
    marginClass = 'lg:mr-5';
  } else if (fields.length - 1 === index) {
    marginClass = 'lg:ml-5';
  } else {
    marginClass = 'lg:mx-5';
  }
  return marginClass;
};
