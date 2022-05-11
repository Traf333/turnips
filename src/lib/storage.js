import {MMKVLoader} from 'react-native-mmkv-storage';

export const playsStorage = new MMKVLoader().withInstanceID('plays').initialize();
export const speechesStorage = new MMKVLoader()
  .withInstanceID('speeches')
  .initialize();

export default {playsStorage, speechesStorage};
