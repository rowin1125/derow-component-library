import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Row from '../../general/Row';
import Card from '../../general/Card';
import Col from '../../general/Col';
import BgOverflow from '../../general/BgOverflow';
import LinkSvg from '../../backup/LinkSvg';
import Container from '../../general/Container';
import LinkHandler from './LinkHandler';

const UspCard = ({
  content,
  className,
  htmlSerializer,
  linkResolver,
  containerProps,
  link: Link = 'a',
  iconGenerator,
  linkIcon,
  cardProps,
  linkProps,
  colProps,
  rowProps,
  linkIconProps,
  iconProps,
  ...rest
}) => {
  const UserCustomerLinkSvg = linkIcon || LinkSvg;

  return (
    <BgOverflow
      className={cn(
        { 'bg-brand': content.primary?.bg_brand },
        'py-8 lg:py-16 usp-card w-full',
        className,
      )}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container>
        <Row wrap centerX {...rowProps}>
          {content.fields?.map(usp => {
            const Icon = iconGenerator(usp.usp_icon);
            const shouldBeALink = !!usp.link;

            const LinkElement = shouldBeALink ? LinkHandler : 'div';
            return (
              <Col
                key={usp.usp_icon}
                xs={12}
                lg={4}
                centerX
                centerY
                className='mb-5 lg:mb-10'
                {...colProps}
              >
                <LinkElement
                  link={shouldBeALink ? Link : undefined}
                  href={
                    shouldBeALink ? linkResolver(usp.link._meta) : undefined
                  }
                  className='lg:mx-5 my-0 w-full h-full relative'
                  {...linkProps}
                >
                  <Card
                    centerX
                    centerY
                    variant='primary'
                    className='w-full h-full'
                    hover={shouldBeALink ? true : false}
                    {...cardProps}
                    noMarginBottom
                  >
                    {shouldBeALink && (
                      <UserCustomerLinkSvg
                        className='h-4 w-4 fill-current absolute top-0 right-0 m-2'
                        {...linkIconProps}
                      />
                    )}
                    <Icon className='text-6xl mb-2' {...iconProps} />
                    <RichText
                      htmlSerializer={htmlSerializer}
                      render={usp.usp_text}
                    />
                  </Card>
                </LinkElement>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BgOverflow>
  );
};

UspCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object.isRequired,
  linkResolver: PropTypes.func.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  link: PropTypes.any,
  linkIcon: PropTypes.node,
  iconGenerator: PropTypes.func,
  containerProps: PropTypes.object,
  cardProps: PropTypes.object,
  linkProps: PropTypes.object,
  colProps: PropTypes.object,
  rowProps: PropTypes.object,
  linkIconProps: PropTypes.object,
  iconProps: PropTypes.object,
};

export default UspCard;
