const api = 'https://api.covid19tracking.narrativa.com/api';
const date = '2022-02-02';
const country = 'spain';

const fetchData = async () => {
  const response = await fetch(`${api}/${date}/country/${country}`);
  const data = await response.json();
  return data;
};

export default fetchData;
