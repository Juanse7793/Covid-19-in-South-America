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
      <h1>Details</h1>
      <table>
        <thead>
          <tr>
            <th>Countries</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <tr key={country.id}>
              <td>
                <DetailsItem detail={country} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
