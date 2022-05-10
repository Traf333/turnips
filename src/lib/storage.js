import {MMKVLoader} from 'react-native-mmkv-storage';

export const plays = new MMKVLoader().withInstanceID('plays').initialize();
export const speeches = new MMKVLoader()
  .withInstanceID('speeches')
  .initialize();

export default {plays, speeches};
