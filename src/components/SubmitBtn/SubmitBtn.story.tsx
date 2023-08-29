import React, { FC } from 'react';
import { Formik } from 'formik';

import SubmitBtn, { SubmitBtn as SubmitBtnComp } from './SubmitBtn';
import Form from '../Form';

export default {
  title: 'SubmitBtn',
  component: SubmitBtn,
  parameters: {
    props: {
      propTables: [SubmitBtnComp],
    },
  },
};

export const Example: FC = () => {
  return (
    <Formik
      initialValues={{
        testFiled: 'Data was submitted',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};
