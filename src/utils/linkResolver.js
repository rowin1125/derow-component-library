/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
export const linkResolver = doc => {
  if (doc.type) {
    switch (doc.type) {
      case 'album':
        return `/albums/${doc.uid}`;
      case 'albums':
        return `/${doc.uid}`;
      case 'landing_page':
        return `/${doc.uid}`;
      case 'product':
        return `/producten/${doc.uid}`;
      case 'post':
        return `/blog/${doc.uid}`;
      case 'homepage':
        return '/';

      default:
        return `/${doc.uid}`;
    }
  } else if (doc._linkType) {
    switch (doc._linkType) {
      case 'Link.document':
        const url = linkResolver(doc._meta);
        return url;

      case 'Link.image':
        return doc.url;
      case 'Link.web':
        return doc.url;
      default:
        break;
    }
  }
};
