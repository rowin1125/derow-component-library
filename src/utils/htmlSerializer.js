/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-case-declarations */
// -- The HTML Serializer
// This function will be used to modify the way that a Rich Text or Title field is rendered.

import React from 'react';
import { Link as PrismicLink } from 'prismic-reactjs';
import { Elements } from 'prismic-richtext';
import Link from 'next/link';
import styled from 'styled-components';

import { linkResolver } from './linkResolver';
import { makeHyphen } from './helpers';

const ImageContainer = styled.img`
  min-width: calc(100% + 32px);

  @media screen and (min-width: 1024px) {
    min-width: calc(100% + 80px);
  }
`;

export const htmlSerializer = (type, element, content, children, index) => {
  let result;
  let url;
  switch (type) {
    case Elements.heading1:
      return (
        <h1
          key={element.text}
          className='text-baseNormal my-4'
          id={makeHyphen(element.text)}
        >
          {children}
        </h1>
      );
    case Elements.heading2:
      return (
        <h2
          key={element.text}
          id={makeHyphen(element.text)}
          className='text-baseNormal my-4 '
        >
          {children}
        </h2>
      );
    case Elements.heading3:
      return (
        <h3 key={element.text} className='text-baseNormal text-xl my-4'>
          {children}
        </h3>
      );
    case Elements.heading4:
      return (
        <h4
          key={element.text}
          className='text-baseNormal text-lg font-semibold my-4'
        >
          {children}
        </h4>
      );
    case Elements.heading5:
      return (
        <h5 key={element.text} className='text-baseDark text-xl font-semibold'>
          {children}
        </h5>
      );
    case Elements.heading6:
      return (
        <h6 key={element.text} className='text-base'>
          {children}
        </h6>
      );
    case Elements.list:
      return (
        <ul key={index} className='mt-6 mb-6 list-disc list-inside pl-6'>
          {children}
        </ul>
      );
    case Elements.oList:
      return (
        <ol className='mb-4' key={index}>
          {children}
        </ol>
      );

    case Elements.listItem:
      return <li key={index}>{children}</li>;
    case Elements.hyperlink:
      result = '';
      url = PrismicLink.url(element.data, linkResolver);

      if (element.data.link_type === 'Document') {
        result = (
          <Link href={url} key={index}>
            <a className='underline text-gray-300 inline-block'>{content}</a>
          </Link>
        );
      } else {
        const target = element.data.target
          ? { target: element.data.target, rel: 'noopener' }
          : {};
        result = (
          <a
            className='underline inline-block'
            href={url}
            {...target}
            key={index}
          >
            {content}
          </a>
        );
      }
      return result;

    case Elements.image:
      result = (
        <ImageContainer
          key={element.url}
          className='-ml-4 lg:-ml-10 w-full mt-10 mb-10'
          src={element.url}
          alt={element.alt || ''}
          copyright={element.copyright || 'Jose Mol Fotografie'}
        />
      );

      if (element.linkTo) {
        url = PrismicLink.url(element.linkTo, linkResolver);

        if (element.linkTo.link_type === 'Document') {
          result = (
            <Link className='underline inline-block' to={url} key={index}>
              {result}
            </Link>
          );
        } else {
          const target = element.linkTo.target
            ? { target: element.linkTo.target, rel: 'noopener' }
            : {};
          result = (
            <a className='underline inline-block' href={url} {...target}>
              {result}
            </a>
          );
        }
      }
      const wrapperClassList = [element.label || '', 'block-img'];
      result = (
        <p className={wrapperClassList.join(' ')} key={index}>
          {result}
        </p>
      );
      return result;

    default:
      return null;
  }
};
