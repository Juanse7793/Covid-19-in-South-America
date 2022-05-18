jest.mock('./home.js');
jest.mock('./details.js');
const main = require('./home');
const main2 = require('./details');

describe('Home mock', () => {
  it('Get the data from the store', () => {
    expect(main.getDataFromApi()).toBe('The API data is fetched');
  });
  it('Filter the data', () => {
    expect(main.filteredData()).toBe('The data is filtered');
  });
  it('Get the filtered data to create details', () => {
    expect(main2.getDataFilteredFromApi()).toBe('The filtered data form API data is fetched');
  });
});
