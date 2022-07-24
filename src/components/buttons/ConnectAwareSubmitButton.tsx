import { useFormikContext } from 'formik';
import { useCallback } from 'react';

import { useAccountOrConnect } from '../../features/wallet/useAccountOrConnect';
import { useTimeout } from '../../utils/timeout';

import { SolidButton } from './SolidButton';

interface Props {
  connectText: string;
}

export function ConnectAwareSubmitButton<FormValues = any>(props: Props) {
  const { connectText } = props;

  const { address, isConnected, connector, onClickConnect } =
    useAccountOrConnect();
  const isAccountReady = !!(address && isConnected && connector);

  const { errors, setErrors, touched, setTouched } =
    useFormikContext<FormValues>();

  const hasError =
    Object.keys(touched).length > 0 && Object.keys(errors).length > 0;
  const firstError = `${Object.values(errors)[0]}` || 'Unknown error';

  const color = hasError ? 'red' : 'beige';
  const text = hasError
    ? firstError
    : isAccountReady
    ? connectText
    : 'Connect Wallet';
  const type = isAccountReady ? 'submit' : 'button';
  const onClick = isAccountReady ? undefined : onClickConnect;

  // Automatically clear error state after a timeout
  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setErrors, setTouched, errors, touched]);

  useTimeout(clearErrors, 3000);

  return (
    <SolidButton size="m" type={type} color={color} onClick={onClick}>
      {text}
    </SolidButton>
  );
}
