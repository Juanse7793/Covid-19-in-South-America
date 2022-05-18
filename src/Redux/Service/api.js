const date = new Date();
const yesterday = new Date();
yesterday.setDate(date.getDate() - 1);

const ap2 = `https://api.covid19tracking.narrativa.com/api/${yesterday.toISOString().split('T')[0]}`;

const fetchData = async () => {
  try {
    const response = await fetch(ap2);
    const data = await response.json();
    const dat = [];
    dat.push(data.dates[`${yesterday.toISOString().split('T')[0]}`].countries);
    const result = Object.keys(dat[0]).map((key) => ({
      id: key,
      name: dat[0][key].name,
      today_confirmed: dat[0][key].today_confirmed,
      today_deaths: dat[0][key].today_deaths,
      today_recovered: dat[0][key].today_recovered,
      source: dat[0][key].source,
      today_open_cases: dat[0][key].today_open_cases,
    }));
    return result;
  } catch (err) {
    return err;
  }
};

export default fetchData;
