import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const WorkFlowWrapper = styled.div`
  ${props =>
    props.type === 'to_brand' &&
    'background: linear-gradient(0, #ffffff 11.74%, #2670d0)'}
  ${props =>
    props.type === 'from_brand' &&
    'background: linear-gradient(180deg, #ffffff 11.74%, #2670d0)'}
`;

const BgOverflow = ({ children, type = '', ...rest }) => {
  return (
    <WorkFlowWrapper type={type} className={cn('BgOverflow', type)} {...rest}>
      {children}
    </WorkFlowWrapper>
  );
};

BgOverflow.propTypes = {
  type: PropTypes.oneOf(['to_brand', 'from_brand', '']),
  children: PropTypes.node,
};

export default BgOverflow;
