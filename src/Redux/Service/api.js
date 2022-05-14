// const api = 'https://api.covid19tracking.narrativa.com/api';
const ap2 = 'https://api.covid19tracking.narrativa.com/api/2022-05-12';
// const date = '2022-02-02';
// const country = 'spain';

const fetchData = async () => {
  try {
    const response = await fetch(ap2);
    const data = await response.json();
    const dat = [];
    dat.push(data.dates['2022-05-12'].countries);
    const result = Object.keys(dat[0]).map((key) => ({
      id: key,
      name: dat[0][key].name,
      today_confirmed: dat[0][key].today_confirmed,
    }));
    return result;
  } catch (err) {
    return err;
  }
};

export default fetchData;
