import config from '../configs';

const api = {
  getBreeds: async () => {
    const response = await fetch(`${config.API_BASE}/breeds/list/all`);
    const data = await response.json();
    if (data?.status === 'success') {
      const breedsObject = data.message;
      return Object.keys(breedsObject);
    }
    return [];
  },
  getDogsByBreed: async (breed) => {
    const response = await fetch(
      `${config.API_BASE}/breed/${breed}/images/random/20`
    );
    const data = await response.json();
    if (data?.status === 'success') {
      return data.message;
    }
    return [];
  },
};

export default api;
