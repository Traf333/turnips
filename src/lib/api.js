// import fs from 'react-native-fs';
import Config from 'react-native-config';

// import * as PlayRepository from '../repositories/PlayRepository';
// import * as SpeechRepository from '../repositories/SpeechRepository';

export const API_URL = 'http://localhost:3000';

const extractedId = id => id.split('speech-')[1];

export const fetchPlays = async () => {
  const res = await fetch(`${API_URL}/play.json`);
  const json = await res.json();
  // await PlayRepository.bulkCreate(json);
  return json;
};

export const updateSpeech = async (id, params) => {
  // await SpeechRepository.update(id, params);
  let res;
  try {
    res = await fetch(`${API_URL}/speeches/${extractedId(id)}.json`, {
      method: 'PUT',
      body: JSON.stringify({speech: params}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log('fails with', id);
    console.error(e);
  }
  return await res.json();
};

export const fetchSpeechesFromServer = async playId => {
  console.log('fetch from the server');
  const res = await fetch(`${API_URL}/speeches.json?play_id=${playId}`);
  return await res.json();
};

export const fetchSpeeches = async playId => {
  // let speeches = await SpeechRepository.all(playId);
  if (speeches.length > 0) {
    return speeches;
  }
  const speeches = await fetchSpeechesFromServer(playId);
  console.log('speech size', speeches.length);
  try {
    // await SpeechRepository.bulkCreate(speeches);
  } catch (e) {
    console.log('error to put', e.message);
  }
  return speeches;
};

export const deleteSpeech = async id => {
  // await SpeechRepository.remove(id);

  await fetch(`${API_URL}/speeches/${extractedId(id)}.json`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
// export const downloadAudio = async (url, fileName) => {
//   return await fs.download(url, fs.cacheDirectory + fileName);
// };
//
// export const uploadAudio = async (id, uri) => {
//   try {
//     return await fs.uploadAsync(`${API_URL}/speeches/${extractedId(id)}`, uri, {
//       httpMethod: 'PUT',
//       fieldName: 'speech[audio]',
//       uploadType: fs.FileSystemUploadType.MULTIPART,
//     });
//   } catch (e) {
//     console.log('fails with speech id', id);
//   }
// };
