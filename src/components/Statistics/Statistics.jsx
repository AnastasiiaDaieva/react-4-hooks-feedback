import React from 'react';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <>
      {total > 0 ? (
        <div className={s.Statistics}>
          <ul className={s.Statistics__list}>
            <li key="id-1" className="Statistics__item">
              Good: {good}
            </li>
            <li key="id-2" className="Statistics__item">
              Neutral: {neutral}
            </li>
            <li key="id-3" className="Statistics__item">
              Bad: {bad}
            </li>
            <li key="id-4" className="Statistics__item">
              Total: {total}
            </li>
            <li key="id-5" className="Statistics__item">
              Positive: {positivePercentage}%
            </li>
          </ul>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export { Statistics };
