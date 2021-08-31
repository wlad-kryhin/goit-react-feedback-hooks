import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Section from "./components/Section/Section";
import Statics from "./components/Statics/Statics";
import Notification from "./components/Notification/Notification";
function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedBack = (option) => {
    setState((state) => ({
      ...state,
      [option]: state[option] + 1,
    }));
  };

  const totalFeedBack = () => {
    return Object.values(state).reduce((acc, option) => acc + option, 0);
  };
  const totalPositiveFeedBack = () => {
    return Math.round((state.good / totalFeedBack()) * 100 || 0);
  };
  const message = "No feedback given";
  return (
    <div className="container">
      <Section title="Please leave feedback">
        <div className="buttons__container">
          <Buttons options={Object.keys(state)} feedBack={handleFeedBack} />
        </div>
      </Section>
      <Section title="Statistics">
        {totalFeedBack() === 0 ? (
          <Notification text={message} />
        ) : (
          <Statics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            totalFeedback={totalFeedBack()}
            positiveFeedBack={totalPositiveFeedBack()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
