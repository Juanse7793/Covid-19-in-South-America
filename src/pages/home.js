import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Reducers/data';
import southAmerica from '../images/Southamerica.svg';

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
      <h1 className="title">Covid 19 in South American Countries</h1>
      <div className="first-card-cont">
        <img className="sac-img" src={southAmerica} alt="South american countries" />
        <div className="first-card">
          <h2 className="subtitle">South America</h2>
          <p className="description">442.5 hab</p>
        </div>
      </div>
      <div className="second-card-cont">
        <h2 className="stats">STATS BY COUNTRY</h2>
        <div className="second-card">
          {data.map((country) => (
            <div key={country.id} className="card">
              <button className="country-btn" type="button" onClick={() => handleRedirect(country.name)}>
                {country.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
