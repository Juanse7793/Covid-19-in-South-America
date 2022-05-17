import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Reducers/data';
import DetailsItem from '../components/detailsItem';

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data
    .filter((country) => window.location.pathname
      .includes(country.name)));

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="Details">
      <div className="title-container">
        <h1 className="details-title">
          Covid Stats in&nbsp;
          <span className="country-name">
            {window.location.pathname.split('/')[1]}
          </span>
        </h1>
      </div>
      <div className="images-cont" />
      <div className="details-item-cont">
        {data.map((country) => (
          <li className="elli" key={country.id}>
            <DetailsItem detail={country} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Details;
