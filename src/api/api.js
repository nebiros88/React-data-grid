import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
});

export const itrexAPI = {
  getData() {
    return instance.get();
  }
}