import PrismicDom from 'prismic-dom';

export const makeHyphen = element =>
  element
    .split(' ')
    .slice(0, 3)
    .join('-');

export const makeUppercase = element =>
  element.charAt(0).toUpperCase() + element.slice(1);

export const removeHyphen = element => {
  const upperCaseText = makeUppercase(element);
  return upperCaseText
    .split('-')
    .slice(0, 3)
    .join(' ');
};

export const formatData = date => {
  const rawDate = PrismicDom.Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(rawDate);
  return formattedDate;
};
