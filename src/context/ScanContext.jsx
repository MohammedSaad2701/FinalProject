import { createContext, useState } from 'react';

// Create Context for scan data
export const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
  const [scanData, setScanData] = useState(null); // Stores URL input
  const [results, setResults] = useState(null);   // Stores scan results
  const [history, setHistory] = useState([]);     // Stores scan history

  return (
    <ScanContext.Provider value={{ scanData, setScanData, results, setResults, history, setHistory }}>
      {children}
    </ScanContext.Provider>
  );
};