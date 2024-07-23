import axios from 'axios';

// Define the base URL for your API
const BASE_URL_NPM = 'https://api.npmjs.org/downloads';
const BASE_URL_META = 'https://registry.npmjs.org';
const BASE_URL_NPM_SEARCH = 'https://registry.npmjs.org/-/v1/search';

const getMetaNpm = async ( packageName: string) => {
  const response = await axios.get(`${BASE_URL_META}/${packageName}`);
  return response.data;
};

const getPackagesSearch = async (packageName: string) => {
  const response = await axios.get(`${BASE_URL_NPM_SEARCH}?text=${packageName}`);
  return response.data;
}

const getTotalDownloadsInPeriod = async (period: string, packageName: string) => {
  const response = await axios.get(`${BASE_URL_NPM}/point/${period}/${packageName}`);
  return response.data;
};

const getSingleDownloads = async (packageName: string, period: string) => {
  const response = await axios.get(`${BASE_URL_NPM}/range/${period}/${packageName}`);
  return response.data;
}

const getComparedDownloads = async (packagesNames: string, period: string) => {
  const response = await axios.get(`${BASE_URL_NPM}/point/${period}/${packagesNames}`);
  return response.data;
}

export { getMetaNpm, getTotalDownloadsInPeriod, getSingleDownloads, getPackagesSearch, getComparedDownloads }