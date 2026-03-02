
import Statistic from "./Statistic";
function Scores({ courseName, result }) {
  const scoreClassName = (score) => {
    return score > 50 ? "" : "warning";
  };
  return (
    <div className="scores">
      <h3>{courseName}</h3>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {result.map((value, index) => (
            <tr key={index}>
              <th>{value.firstName}</th>
              <th>{value.lastName}</th>
              <th className={scoreClassName(value.score)}>{value.score}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <Statistic results={result}/>
    </div>
  );
}

export default Scores;
