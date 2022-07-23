import { Form, Formik } from 'formik';
import { useNetwork } from 'wagmi';

import { ConnectAwareSubmitButton } from '../../components/buttons/ConnectAwareSubmitButton';
import { SelectField } from '../../components/input/SelectField';
import { TextField } from '../../components/input/TextField';
import { shortenAddress } from '../../utils/addresses';
import { getChainName } from '../../utils/chains';
import { useSavedNfts } from '../search/useSavedNfts';

import { TransferFormValues } from './types';

const initialValues: TransferFormValues = {
  nftId: '',
  recipient: '',
  chainId: '',
};

export function TransferForm() {
  const { chains } = useNetwork();
  const { nfts } = useSavedNfts();

  // TODO CASA standard
  const nftOptions = nfts.map((n) => ({
    value: `${n.chainId}:${n.contract}:${n.tokenId}`,
    display: `${getChainName(n.chainId)} - ${shortenAddress(n.contract)} - #${
      n.tokenId
    }`,
  }));

  const chainOptions = chains.map((c) => ({
    value: c.id.toString(),
    display: getChainName(c.id),
  }));

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
        <label htmlFor="recipient" className="text-gray-700 mt-1">
          Select NFT
        </label>
        <SelectField options={nftOptions} name="nftId" />
        <label htmlFor="recipient" className="mt-3 text-gray-700">
          Recipient Address
        </label>
        <TextField name="recipient" placeholder="0x123..." />
        <label htmlFor="contract" className="mt-3 text-gray-700">
          Destination Chain
        </label>
        <SelectField options={chainOptions} name="chainId" />
        <div className="flex justify-center mt-5 mb-1">
          <ConnectAwareSubmitButton connectText="Continue" />
        </div>
      </Form>
    </Formik>
  );
}
