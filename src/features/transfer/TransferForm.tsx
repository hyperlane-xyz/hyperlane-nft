import { Field, Form, Formik, useFormikContext } from 'formik';
import { useCallback } from 'react';
import { useAccount } from 'wagmi';

import { SolidButton } from '../../components/buttons/SolidButton';
import { useTimeout } from '../../utils/timeout';

import { TransferFormValues } from './types';

const initialValues: TransferFormValues = {
  recipient: '',
  contract: '',
  tokenId: '',
};

export function TransferForm() {
  const onSubmit = () => {
    alert('TODO');
  };

  const validateForm = () => {
    alert('TODO');
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
          <SubmitButton />
        </div>
      </Form>
    </Formik>
  );
}

function SubmitButton() {
  const { address, isConnected } = useAccount();
  const accountReady = address && isConnected;

  const { errors, setErrors, touched, setTouched } =
    useFormikContext<TransferFormValues>();
  const error =
    touched.recipient &&
    (errors.recipient || errors.contract || errors.tokenId);
  const classes = error ? 'bg-red-500 hover:bg-red-500 active:bg-red-500' : '';
  const text = error ? error : accountReady ? 'Continue' : 'Connect Wallet';
  const type = accountReady ? 'submit' : 'button';
  const onClick = () => alert('TODO');

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setErrors, setTouched, errors, touched]);

  useTimeout(clearErrors, 3000);

  return (
    <SolidButton size="m" type={type} onClick={onClick} classes={classes}>
      {text}
    </SolidButton>
  );
}
