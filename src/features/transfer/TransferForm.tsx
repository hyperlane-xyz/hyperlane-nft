import { Form, Formik } from 'formik';

import { ConnectAwareSubmitButton } from '../../components/buttons/ConnectAwareSubmitButton';
import { TextField } from '../../components/input/TextField';

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
        <TextField name="recipient" placeholder="0x123..." />
        <label htmlFor="contract" className="mt-3 text-gray-700">
          Contract Address
        </label>
        <TextField name="contract" placeholder="0x123..." />
        <label htmlFor="tokenId" className="mt-3 text-gray-700">
          Token Id
        </label>
        <TextField name="tokenId" placeholder="0x123..." />
        <div className="flex justify-center mt-5 mb-1">
          <ConnectAwareSubmitButton connectText="Continue" />
        </div>
      </Form>
    </Formik>
  );
}
