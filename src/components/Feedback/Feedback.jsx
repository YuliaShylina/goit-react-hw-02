import css from "./Feedback.module.css";

function Feedback({
  totalFeedback,
  state: { good, neutral, bad },
  percentFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {percentFeedback}%</li>
    </ul>
  );
}

export default Feedback;
