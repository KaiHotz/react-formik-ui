import React, { FC } from 'react';
import { Formik } from 'formik';

import Toggle, { Toggle as ToggleComp } from './Toggle';
import Form from '../Form';

export default {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    props: {
      propTables: [ToggleComp],
    },
  },
};

export const Example: FC = () => {
  return (
    <Formik
      initialValues={{
        toggleSwitchExample: false,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Toggle name="toggleSwitchExample" />
      </Form>
    </Formik>
  );
};
