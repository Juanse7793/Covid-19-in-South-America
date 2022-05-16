import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Reducers/data';

const Home = () => {
  const sac = [
    'Argentina',
    'Bolivia',
    'Brazil',
    'Chile',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
    'Venezuela',
  ];

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.filter((country) => sac.includes(country.name)));

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleRedirect = (country) => {
    window.location.href = `/${country}`;
  };

  return (
    <div className="Home">
      <h1>Home</h1>
      <table>
        <thead>
          <tr>
            <th>Countries</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <tr key={country.id} path={`${country.name}`}>
              <td>
                <button
                  type="button"
                  onClick={() => handleRedirect(country.name)}
                >
                  {country.name}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
