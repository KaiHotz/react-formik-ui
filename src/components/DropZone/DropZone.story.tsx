import React, { FC } from 'react';
import { Formik } from 'formik';

import DropZone, { DropZone as DropZoneComp } from './DropZone';
import Form from '../Form';

export default {
  title: 'DropZone',
  component: DropZone,
  parameters: {
    props: {
      propTables: [DropZoneComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        files: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone
          name="files"
          label="File upload"
          placeholder="Try dropping some files here, or click to select files to upload."
        />
      </Form>
    </Formik>
  );
};

export const WithClearButton: FC = () => {
  return (
    <Formik
      initialValues={{
        files: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone
          name="files"
          label="File upload"
          placeholder="Try dropping some files here, or click to select files to upload."
          withClearButton
        />
      </Form>
    </Formik>
  );
};

export const SingleFileUpload: FC = () => {
  return (
    <Formik
      initialValues={{
        files: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone
          name="files"
          label="File upload"
          placeholder="Try dropping some files here, or click to select files to upload."
          multiple={false}
        />
      </Form>
    </Formik>
  );
};

export const WithFileCountForAcceptedAndRejectedFiles: FC = () => {
  return (
    <Formik
      initialValues={{
        files: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone
          fileCount
          name="files"
          label="File upload"
          placeholder="Try dropping some files here, or click to select files to upload."
        />
      </Form>
    </Formik>
  );
};

export const Disabled: FC = () => {
  return (
    <Formik
      initialValues={{
        files5: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone
          name="files5"
          label="File upload"
          placeholder="Try dropping some files here, or click to select files to upload."
          disabled
        />
      </Form>
    </Formik>
  );
};
