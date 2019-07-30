import 'bootstrap-4-grid/css/grid.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Col = ({ children, style, xs, sm, md, lg }) => (
  <div
    style={style}
    className={`col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg}`}
  >
    {children}
  </div>
);

Col.propTypes = {
  children: PropTypes.symbol.isRequired,
  style: PropTypes.symbol.isRequired,
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
  lg: PropTypes.number.isRequired,
};
