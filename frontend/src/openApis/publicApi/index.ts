

import {
  PublicApi,
} from '../api/public-api';

import { Configuration } from '../configuration';

import axios from 'axios';

const API_URL = "http://localhost:3000/api";

const config = new Configuration({
  basePath: API_URL
});

const axiosInstance = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  responseType: "json"
});

const publicApi = new PublicApi(config, '', axiosInstance);

export {
  publicApi
};
