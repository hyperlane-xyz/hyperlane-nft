import { Field, Form, Formik } from 'formik';

import { ConnectAwareSubmitButton } from '../../components/buttons/ConnectAwareSubmitButton';

import { TransferFormValues } from './types';

const initialValues: TransferFormValues = {
  recipient: '',
  contract: '',
  tokenId: '',
};

export function TransferForm() {
  const onSubmit = (values: TransferFormValues) => {
    alert(JSON.stringify(values));
  };

  const validateForm = (values: TransferFormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik<TransferFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validateForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="flex flex-col justify-center items-center w-full">
        <label htmlFor="recipient" className="text-gray-700">
          Recipient Address
        </label>
        <Field
          name="recipient"
          type="string"
          placeholder="0x123..."
          className="w-100 mt-2 p-2 text-lg font-mono border border-color-gray-800 rounded focus:outline-none"
        />
        <label htmlFor="contract" className="mt-3 text-gray-700">
          Contract Address
        </label>
        <Field
          name="contract"
          type="string"
          placeholder="0x123..."
          className="w-100 mt-2 p-2 text-lg font-mono border border-color-gray-800 rounded focus:outline-none"
        />
        <label htmlFor="tokenId" className="mt-3 text-gray-700">
          Token Id
        </label>
        <Field
          name="tokenId"
          type="string"
          placeholder="42"
          className="w-100 mt-2 p-2 text-lg font-mono border border-color-gray-800 rounded focus:outline-none"
        />
        <div className="flex justify-center mt-5 mb-1">
          <ConnectAwareSubmitButton connectText="Continue" />
        </div>
      </Form>
    </Formik>
  );
}
