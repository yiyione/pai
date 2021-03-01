// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import React, { isValidElement } from 'react';
import Box from './Box';
import PropTypes from 'prop-types';

const Row = ({ children, gutter }) => {
  const rowStyle =
    gutter > 0
      ? {
          marginLeft: gutter / -2,
          marginRight: gutter / -2,
        }
      : {};
  const cols = React.Children.map(children, col => {
    if ((React, isValidElement(col))) {
      return React.cloneElement(col, {
        style: { paddingLeft: gutter / 2, paddingRight: gutter / 2 },
      });
    }
    return col;
  });
  return (
    <Box display='flex' flexWrap='wrap' {...rowStyle}>
      {cols}
    </Box>
  );
};

export default Row;

Row.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.number,
};
