import { Form, Formik } from 'formik';

import { ConnectAwareSubmitButton } from '../../components/buttons/ConnectAwareSubmitButton';
import { TextField } from '../../components/input/TextField';
import { HrDivider } from '../../components/layout/HrDivider';
import { logger } from '../../utils/logger';

import { SearchFormValues } from './types';
import { useSavedNfts } from './useSavedNfts';

const initialValues: SearchFormValues = {
  contract: '',
};

export function SearchForm() {
  const { nfts, saveNft } = useSavedNfts();

  const onSubmit = (values: SearchFormValues) => {
    logger.debug(JSON.stringify(values));
    const tokenId = Math.round(Math.random() * 1000);
    saveNft({ chainId: 1, contract: '0x123', tokenId });
  };

  const validateForm = (values: SearchFormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Formik<SearchFormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className="flex flex-col justify-center items-center w-full">
          <h2 className="text-gray-700">Your Abacus NFTs</h2>
          {nfts.length > 0 ? (
            <div className="flex flex-wrap mt-3">
              {nfts.map((nft, i) => (
                <div key={`nft-${i}`} className="mx-2">
                  {nft.tokenId}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-400 mt-3">
              No NFTs yet, try adding a contract below
            </div>
          )}
          <div className="px-2 w-full">
            <HrDivider classes="my-5" />
          </div>
          <h2 className="text-center text-gray-700 mb-1">
            {`Add NFT (AbcErc721)`}
          </h2>
          <TextField name="contract" placeholder="Contract Address 0x123..." />
          <div className="flex justify-center mt-5 mb-1">
            <ConnectAwareSubmitButton connectText="Search" />
          </div>
        </Form>
      </Formik>
    </>
  );
}
