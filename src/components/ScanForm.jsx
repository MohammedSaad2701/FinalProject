import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// Reusable form for URL input with validation
function ScanForm({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // Validate URL format
  const validateUrl = (input) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+?\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    return urlPattern.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }
    setError('');
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="scan-form">
      <label htmlFor="url-input" className="form-label">
        Enter URL to Scan
      </label>
      <input
        id="url-input"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="form-input"
      />
      {error && <p className="form-error">{error}</p>}
      <Button type="submit">Start Scan</Button>
    </form>
  );
}

ScanForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ScanForm;