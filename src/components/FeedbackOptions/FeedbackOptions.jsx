import React from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, incrementFunc }) {
  return (
    <ul className={s.FeedbackOptions__list}>
      {options.map(({ color, id, value }) => {
        return (
          <li
            key={id}
            className={s.FeedbackOptions__item}
            onClick={() => incrementFunc(value)}
          >
            <button
              type="button"
              className={(s.FeedbackOptions__button, s[color])}
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  incrementFunc: PropTypes.func,
  color: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

export { FeedbackOptions };
