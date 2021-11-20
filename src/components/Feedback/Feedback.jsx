import React, { Component, useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import feedbackTypes from 'data/feedbackTypes.json';
import { Section } from 'components/Section/Section';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    const result = Math.round((good / total) * 100);
    return result;
  };

  const totalNumber = countTotalFeedback();

  const positivePerc = countPositiveFeedbackPercentage(totalNumber);

  return (
    <>
      <Section title="Please leave your feedback" className="Feedback">
        <FeedbackOptions
          options={feedbackTypes}
          incrementFunc={handleIncrement}
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

// class OldFeedback extends Component {
//   static defaultProps = {
//     step: 1,
//     positivePerc: '0',
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = option => {
//     this.setState({
//       [option]: this.state[option] + this.props.step,
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;

//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage(total) {
//     const { good } = this.state;
//     const result = Math.round((good / total) * 100);
//     return result;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;

//     const totalNumber = this.countTotalFeedback();

//     const positivePerc = this.countPositiveFeedbackPercentage(totalNumber);

//     console.log(totalNumber);
//     return (
//       <>
//         <Section title="Please leave your feedback" className="Feedback">
//           <FeedbackOptions
//             options={feedbackTypes}
//             incrementFunc={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics" className="Statistics__heading">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalNumber}
//             positivePercentage={positivePerc}
//           />
//         </Section>
//       </>
//     );
//   }
// }

export { Feedback };
