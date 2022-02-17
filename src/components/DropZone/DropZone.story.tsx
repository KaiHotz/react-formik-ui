import React from 'react';
import DropZone, { DropZone as DropZoneComp } from './DropZone';
import Form from '../Form';
import { Formik } from 'formik';

export default {
  title: 'DropZone',
  component: DropZone,
  parameters: {
    props: {
      propTables: [DropZoneComp],
    },
  },
};

export const Default = () => {
  return (
    <Formik
      initialValues={{
        files: [],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DropZone name="files" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." />
      </Form>
    </Formik>
  );
};

export const WithClearButton = () => {
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

export const SingleFileUpload = () => {
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

export const WithFileCountForAcceptedAndRejectedFiles = () => {
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

export const Disabled = () => {
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
