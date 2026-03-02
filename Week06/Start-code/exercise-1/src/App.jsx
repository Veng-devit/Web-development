import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import { 
  JAVA_RESULTS, 
  PYTHON_RESULTS, 
  HTML_RESULTS, 
  ENGLISH_RESULTS 
} from "./data.js";

function App() {
  return (
    <>
      <Header batchName="Batch 2024" />
      <main className="scores-container">
        <Scores courseName="Java" result={JAVA_RESULTS} />
        <Scores courseName="Python" result={PYTHON_RESULTS} />
        <Scores courseName="HTML" result={HTML_RESULTS} />
        <Scores courseName="English" result={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;