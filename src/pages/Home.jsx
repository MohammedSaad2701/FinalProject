import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Vulnera</h1>
      <p>Scan your website for potential security vulnerabilities with our easy-to-use tool.</p>
      <Button onClick={() => navigate('/scan')}>Start Scanning</Button>
    </div>
  );
}

export default Home;