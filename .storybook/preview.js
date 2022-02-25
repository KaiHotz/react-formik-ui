import './storybook.css';
import './main.scss';

import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable({
  propTablesExclude: ['Story']
}));
