import React from 'react';
import s from 'components/Feedback/Feedback.module.css';

function Section({ className, title, children }) {
  return (
    <section className={s.Feedback}>
      <h2 className={className}>{title}</h2>
      {children}
    </section>
  );
}

export { Section };
