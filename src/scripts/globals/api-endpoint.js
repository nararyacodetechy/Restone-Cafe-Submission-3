import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list?api_key=${CONFIG.KEY}`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
