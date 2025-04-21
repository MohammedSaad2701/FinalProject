import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScanContext } from '../context/ScanContext';
import ScanForm from '../components/ScanForm';
import { API_URL } from '../constants';
import '../styles/scan.css';

// Scan page with form and API call
function Scan() {
  const { setScanData, setResults, setHistory } = useContext(ScanContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleScan = async (url) => {
    setLoading(true);
    setScanData({ url });

    try {
      // Replace with your custom API URL in constants.js or .env
      const response = await fetch(API_URL);
      const data = await response.json();

      // Mock vulnerability data
      const scanResults = {
        url,
        vulnerabilities: [
          { type: 'XSS', severity: 'High', description: 'Cross-site scripting vulnerability detected.' },
          { type: 'SQL Injection', severity: 'Medium', description: 'Potential SQL injection risk.' },
        ],
        timestamp: new Date().toISOString(),
      };

      setResults(scanResults);
      setHistory((prev) => [...prev, scanResults]);
      navigate('/results');
    } catch (error) {
      console.error('Error fetching scan results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scan-container">
      <h1>Scan a Website</h1>
      <ScanForm onSubmit={handleScan} />
      {loading && <div className="progress-bar">Scanning...</div>}
    </div>
  );
}

export default Scan;