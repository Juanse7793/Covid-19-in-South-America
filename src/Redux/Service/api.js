const date = new Date();
const yesterday = new Date();
yesterday.setDate(date.getDate() - 10);

const ap2 = 'https://covid-api.mmediagroup.fr/v1/cases';

const fetchData = async () => {
  try {
    const response = await fetch(ap2);
    const data = await response.json();
    const dat = [];
    dat.push(data);
    const result = Object.keys(dat[0]).map((key) => ({
      id: key,
      name: dat[0][key].All.country,
      today_confirmed: dat[0][key].All.confirmed,
      today_deaths: dat[0][key].All.deaths,
      today_recovered: dat[0][key].All.life_expectancy,
      source: dat[0][key].All.population,
      today_open_cases: dat[0][key].All.updated,
    }));
    return result;
  } catch (err) {
    return err;
  }
};

export default fetchData;
