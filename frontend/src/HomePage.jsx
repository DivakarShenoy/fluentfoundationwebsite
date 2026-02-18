import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <><div className="box" style={{
        width: "100vh",
        height: "100vh",
        backgroundColor: "#4CAF50",
        borderRadius: "15px", // Rounded edges
        overflow: "hidden"    // Ensures child content respects rounding
      }}>Home Page. This is where everything will go</div></>
  )
}

export default HomePage;