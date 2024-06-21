import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
  });

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const percentFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setState(initialFeedback);
      return;
    }

    setState((prevState) => ({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          state={state}
          totalFeedback={totalFeedback}
          percentFeedback={percentFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
