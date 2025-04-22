import { useContext } from 'react';
import { ScanContext } from '../context/ScanContext';
import '../styles/results.css';

function Results() {
  const { results, history } = useContext(ScanContext);

  if (!results) {
    return <div className="results-container">No results available. Please run a scan.</div>;
  }

  return (
    <div className="results-container">
      <h1>Scan Results for {results.url}</h1>
      <ul className="vulnerability-list">
        {results.vulnerabilities.map((vuln, index) => (
          <li key={index} className="vulnerability-item">
            <strong>{vuln.type}</strong> - Severity: {vuln.severity}
            <p>{vuln.description}</p>
          </li>
        ))}
      </ul>

      {history.length > 0 && (
        <div className="history-section">
          <h2>Scan History</h2>
          <ul className="history-list">
            {history.map((entry, index) => (
              <li key={index}>
                {entry.url} - {new Date(entry.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Results;