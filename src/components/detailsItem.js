import React from 'react';
import PropTypes from 'prop-types';

function DetailsItem(props) {
  const { detail } = props;
  const {
    name,
    today_confirmed: todayConfirmed,
    today_deaths: todayDeaths,
    today_recovered: todayRecovered,
    source,
    today_open_cases: todayOpenCases,
  } = detail;

  DetailsItem.propTypes = {
    detail: PropTypes.shape({
      name: PropTypes.string,
      today_confirmed: PropTypes.number,
      today_deaths: PropTypes.number,
      today_recovered: PropTypes.number,
      source: PropTypes.string,
      today_open_cases: PropTypes.number,
    }).isRequired,
  };

  return (
    <div className="DetailsItem">
      <h1>{name}</h1>
      <p>
        Confirmed:
        {todayConfirmed}
      </p>
      <p>
        Deaths:
        {todayDeaths}
      </p>
      <p>
        Recovered:
        {todayRecovered}
      </p>
      <p>
        Source:
        {source}
      </p>
      <p>
        Open cases:
        {todayOpenCases}
      </p>
    </div>
  );
}

export default DetailsItem;
