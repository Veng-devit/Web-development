

function Statistic({ results }) {

  const scores = results.map(item => item.score);

  const avg =
    scores.reduce((sum, value) => sum + value, 0) / scores.length;

  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistic">
      <div>
        <p>Average</p>
        <h4>{Math.round(avg)}</h4>
      </div>

      <div>
        <p>Min</p>
        <h4>{min}</h4>
      </div>

      <div>
        <p>Max</p>
        <h4>{max}</h4>
      </div>
    </div>
  );
}

export default Statistic;