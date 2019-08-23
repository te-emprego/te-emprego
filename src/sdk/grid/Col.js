import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ size, sizes, children, className }) => (
  <div
    className={`${(size && `col-${size}`) ||
      (sizes && sizes.map(s => `col-${s}`))} ${className}`}
  >
    {children}
  </div>
);

Col.propTypes = {
  size: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Col.defaultProps = {
  sizes: [],
  size: 0,
  className: '',
};

export { Col };
export default Col;
