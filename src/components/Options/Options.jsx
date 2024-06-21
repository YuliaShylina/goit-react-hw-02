import css from "./Options.module.css";

function Options({ totalFeedback, updateFeedback }) {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button
        className={totalFeedback ? css.show : css.hidden}
        onClick={() => updateFeedback("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default Options;
