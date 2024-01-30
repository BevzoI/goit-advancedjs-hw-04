import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '42119000-67e67e8f86104d7b34ad0c1ed';

const baseSearchParams = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export const fetchImages = async (q, page) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: { ...baseSearchParams, q, page },
  });
  return data;
};
