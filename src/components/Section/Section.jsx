import React from 'react';
import s from 'components/Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

function Section({ className, title, children }) {
  return (
    <section className={s.Feedback}>
      <h2 className={className}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export { Section };
