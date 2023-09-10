import {createTransform} from 'redux-persist';
import {decrypt, encrypt} from '../utils/cryptoService';

const CryptoTransform = createTransform(
  (inboundState: any, key: any) => {
    const encryptedState: string = encrypt(JSON.stringify(inboundState));
    return encryptedState;
  },
  (outboundState: any, key: any) => {
    const decryptedState: string = decrypt(outboundState);
    return JSON.parse(decryptedState);
  },
  // Define which reducers this transform gets called for.
  {whitelist: ['evaluation']},
);

export default CryptoTransform;
