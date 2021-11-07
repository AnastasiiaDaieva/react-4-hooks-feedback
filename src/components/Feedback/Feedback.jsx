import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import s from './Feedback.module.css';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import feedbackTypes from 'data/feedbackTypes.json';
import { Section } from 'components/Section/Section';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    positivePerc: '0',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState({
      [option]: this.state[option] + this.props.step,
    });
  };

  handleIncrementGood = e => {
    console.log('Increment button was clicked', e);
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleIncrementNeutral = e => {
    console.log('Increment button was clicked', e);
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  handleIncrementBad = e => {
    console.log('Increment button was clicked', e);
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(total) {
    const { good } = this.state;
    const result = Math.round((good / total) * 100);
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const totalNumber = this.countTotalFeedback();

    const positivePerc = this.countPositiveFeedbackPercentage(totalNumber);

    console.log(totalNumber);
    return (
      <>
        <Section title="Please leave your feedback" className="Feedback">
          <FeedbackOptions
            options={feedbackTypes}
            incrementFunc={this.handleIncrementGood}
            incrNeutral={this.handleIncrementNeutral}
            incrBad={this.handleIncrementBad}
            // incrementFunc={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics" className="Statistics__heading">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalNumber}
            positivePercentage={positivePerc}
          />
        </Section>
      </>
    );
  }
}

export { Feedback };
