import { Field, Form, Formik } from 'formik';

import { ConnectAwareSubmitButton } from '../../components/buttons/ConnectAwareSubmitButton';

import { SearchFormValues } from './types';

const initialValues: SearchFormValues = {
  contract: '',
};

export function SearchForm() {
  const onSubmit = (values: SearchFormValues) => {
    alert(JSON.stringify(values));
  };

  const validateForm = (values: SearchFormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik<SearchFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validateForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="flex flex-col justify-center items-center w-full">
        <label htmlFor="contract" className="mt-3 text-gray-700">
          Contract Address
        </label>
        <Field
          name="contract"
          type="string"
          placeholder="0x123..."
          className="w-100 mt-2 p-2 text-lg font-mono border border-color-gray-800 rounded focus:outline-none"
        />
        <div className="flex justify-center mt-5 mb-1">
          <ConnectAwareSubmitButton connectText="Continue" />
        </div>
      </Form>
    </Formik>
  );
}
