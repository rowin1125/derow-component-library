import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Row from '../../general/Row';
import Card from '../../general/Card';
import Col from '../../general/Col';
import BgOverflow from '../../general/BgOverflow';
import LinkSvg from '../../backup/LinkSvg';
import Container from '../../general/Container';

const UspCard = ({
  content,
  htmlSerializer,
  linkResolver,
  containerProps,
  link: Link,
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
  const LinkElement = Link || 'div';
  return (
    <BgOverflow
      className={cn(
        { 'bg-brand': content.primary?.bg_brand },
        'py-10 lg:py-20',
      )}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container>
        <Row wrap centerX {...rowProps}>
          {content.fields?.map(usp => {
            const Icon = iconGenerator(usp.usp_icon);
            return (
              <Col key={usp.title} xs={12} lg={4} centerX centerY {...colProps}>
                <LinkElement
                  href={Link ? linkResolver(usp.link._meta) : undefined}
                  className='mx-4 w-full h-full relative'
                  {...linkProps}
                >
                  <Card
                    centerX
                    centerY
                    variant='primary'
                    className='w-full'
                    hover={Link ? true : false}
                    {...cardProps}
                  >
                    {Link && (
                      <UserCustomerLinkSvg
                        className='h-4 w-4 fill-current absolute top-0 right-0 m-2'
                        {...linkIconProps}
                      />
                    )}
                    <Icon className='text-6xl' {...iconProps} />
                    <h3>{usp.title}</h3>
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
  content: PropTypes.object.isRequired,
  linkResolver: PropTypes.func.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  link: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf(['a'])]),
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
