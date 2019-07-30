import 'bootstrap-4-grid/css/grid.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Row = ({ children, style }) => (
  <div style={style} className="row">
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.symbol.isRequired,
  style: PropTypes.symbol.isRequired,
};
