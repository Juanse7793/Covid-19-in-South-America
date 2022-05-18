import React from 'react';
import PropTypes from 'prop-types';
import confirmed from '../images/Corona/Viruscolor/icons8-protection-mask-48.svg';
import deaths from '../images/Corona/Viruscolor/icons8-hospital-bed-48.svg';
import recovered from '../images/Corona/Viruscolor/icons8-drinking-48.svg';
import openCases from '../images/Corona/Viruspastel/icons8-health-book-128.svg';
import sources from '../images/Corona/Viruspastel/icons8-doctors-bag-128.svg';

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

  const handleReturn = () => {
    window.location.href = '/';
  };

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
      <h1 className="country-title">{name}</h1>
      <div className="detailsbar">
        <p className="det-cont">
          Confirmed:&nbsp;
          {todayConfirmed}
        </p>
        <img src={confirmed} alt="confirmed" className="confirmed-pic" />
      </div>
      <div className="detailsbar">
        <p className="det-cont">
          Deaths:&nbsp;
          {todayDeaths}
        </p>
        <img src={deaths} alt="confirmed" className="confirmed-pic" />
      </div>
      <div className="detailsbar">
        <p className="det-cont">
          Recovered:&nbsp;
          {todayRecovered}
        </p>
        <img src={recovered} alt="confirmed" className="confirmed-pic" />
      </div>
      <div className="detailsbar">
        <p className="det-cont">
          Source:&nbsp;
          {source}
        </p>
        <img src={sources} alt="confirmed" className="confirmed-pic" />
      </div>
      <div className="detailsbar">
        <p className="det-cont">
          Open cases:&nbsp;
          {todayOpenCases}
        </p>
        <img src={openCases} alt="confirmed" className="confirmed-pic" />
      </div>
      <div>
        <button type="button" className="return-btn" onClick={handleReturn}>Return</button>
      </div>
    </div>
  );
}

export default DetailsItem;
