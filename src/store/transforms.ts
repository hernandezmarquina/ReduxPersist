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

const ExpirationTransform = createTransform(
  (inboundState: any, key: any) => {
    return inboundState;
  },
  (outboundState: any, key: any) => {
    if (outboundState && outboundState?.expiresAt >= Date.now()) {
      return outboundState;
    }
    return {};
  },
  // Define which reducers this transform gets called for.
  {whitelist: ['user']},
);

export {CryptoTransform, ExpirationTransform};
