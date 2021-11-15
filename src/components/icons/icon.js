import React from 'react';
import {
  IconLoader,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'Loader':
      return <IconLoader />;
  }
};

export default Icon;
