// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Icon } from 'office-ui-fabric-react';
import React from 'react';
import { Box, Flex } from '../elements';
import PropTypes from 'prop-types';

export const MoreInfo = ({ isShow, onChange }) => {
  return (
    <Flex
      justifyContent='center'
      p='s2'
      style={{ cursor: 'pointer' }}
      onClick={onChange}
    >
      <Box mr='s2' fontSize='s2' color='black-60'>
        {isShow ? 'Hide' : 'More info'}
      </Box>
      {isShow ? <Icon iconName='ChevronUp' /> : <Icon iconName='ChevronDown' />}
    </Flex>
  );
};

MoreInfo.propTypes = {
  isShow: PropTypes.bool,
  onChange: PropTypes.func,
};
