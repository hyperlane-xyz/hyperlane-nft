import { Field, Form, Formik, useFormikContext } from 'formik';
import { useCallback } from 'react';

import { SolidButton } from '../../components/buttons/SolidButton';
import { useTimeout } from '../../utils/timeout';

import { SearchFormValues } from './types';

const initialValues: SearchFormValues = {
  contract: '',
};

export function SearchForm() {
  const address = null;
  const connect = () => {
    alert('TODO');
  };

  const onSubmit = () => {
    alert('TODO');
  };

  const validateForm = () => {
    alert('TODO');
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
          <SubmitButton address={address} connect={connect} />
        </div>
      </Form>
    </Formik>
  );
}

interface ButtonProps {
  address: string | null;
  connect: () => any; // TODO
}

// TODO dedupe with transferform
function SubmitButton({ address, connect }: ButtonProps) {
  const { errors, setErrors, touched, setTouched } =
    useFormikContext<SearchFormValues>();
  const error = touched.contract && errors.contract;
  const classes = error ? 'bg-red-500 hover:bg-red-500 active:bg-red-500' : '';
  const text = error ? error : address ? 'Continue' : 'Connect Wallet';
  const type = address ? 'submit' : 'button';
  const onClick = address ? undefined : connect;

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
