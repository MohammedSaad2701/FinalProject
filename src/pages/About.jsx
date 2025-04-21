import '../styles/about.css';

// About page with tool information
function About() {
  return (
    <div className="about-container">
      <h1>Our Mission</h1>
      <p>
      Vulnera is dedicated to making web security accessible to everyone. Our platform provides comprehensive vulnerability scanning and reporting to help protect your digital assets.
      </p>
      <h2>How It Works</h2>
      <ol>
        <li>Enter your target URL or IP address</li>
        <li>Our scanner performs comprehensive security checks</li>
        <li>Receive detailed reports with vulnerability assessments</li>
        <li>Get actionable recommendations for fixing issues</li>
      </ol>
    </div>
  );
}

export default About;