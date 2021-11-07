import React from 'react';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, incrementFunc }) => (
  <ul className={s.FeedbackOptions__list}>
    {options.map(({ color, id, value }) => {
      return (
        <li
          key={id}
          className={s.FeedbackOptions__item}
          onClick={incrementFunc}
          //   onClick={() => incrementFunc(value)}
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

    {/* <li
      key="id-1"
      data-name="good"
      className={s.FeedbackOptions__item}
      onClick={incrGood}
    >
      <button type="button" className={(s.FeedbackOptions__button, s.green)}>
        Good
      </button>
    </li>
    <li
      key="id-2"
      data-name="neutral"
      className={s.FeedbackOptions__item}
      onClick={incrNeutral}
    >
      <button type="button" className={(s.FeedbackOptions__button, s.blue)}>
        Neutral
      </button>
    </li>
    <li
      key="id-3"
      data-name="bad"
      className={s.FeedbackOptions__item}
      onClick={incrBad}
    >
      <button type="button" className={(s.FeedbackOptions__button, s.red)}>
        Bad
      </button>
    </li> */}
  </ul>
);

export { FeedbackOptions };
