import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import TableColumn from './TableColumn';
import Col from '../Col';
import Row from '../Row';

const LuxePriceTable = ({
  className,
  htmlSerializer,
  linkResolver,
  iconGenerator,
  content,
  showPrice,
  showInfo,
  showButtons,
  ...rest
}) => {
  const multiple = content.length > 1;
  return (
    <div className={cn('py-20', className)} {...rest}>
      <Row className={cn('z-0 mt-20 mb-10 text-gray-100')}>
        {content.map((table, index) => {
          const isMiddle = multiple && index === 1;
          return (
            <Col
              xs={12}
              lg={multiple ? 4 : 12}
              key={index}
              className={cn(
                'my-5 lg:my-0',
                isMiddle
                  ? 'order-first lg:order-none lg:-mt-20 lg:-ml-2 lg:-mr-2 z-10'
                  : 'lg:-mt-10',
              )}
            >
              <TableColumn
                htmlSerializer={htmlSerializer}
                linkResolver={linkResolver}
                iconGenerator={iconGenerator}
                showPrice={showPrice}
                showButtons={showButtons}
                multiple={multiple}
                showInfo={showInfo}
                table={table}
                isMiddle={isMiddle}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

LuxePriceTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.array.isRequired,
  showButtons: PropTypes.bool,
  showInfo: PropTypes.bool,
  showPrice: PropTypes.bool,
  linkResolver: PropTypes.func.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func,
};

export default LuxePriceTable;
