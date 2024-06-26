import axios from 'axios';

// Define the base URL for your API
const BASE_URL_NPM = 'https://api.npmjs.org/downloads';
const BASE_URL_META = 'https://registry.npmjs.org';

const getMetaNpm = async ( packageName: string) => {
  const response = await axios.get(`${BASE_URL_META}/${packageName}`);
  return response.data;
};

const getTotalDownloadsInPeriod = async (period: string, packageName: string) => {
  const response = await axios.get(`${BASE_URL_NPM}/point/${period}/${packageName}`);
  return response.data;
};

export { getMetaNpm, getTotalDownloadsInPeriod }