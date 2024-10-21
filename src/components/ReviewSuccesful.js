import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReviewSuccesful.css'

function ReviewSuccesful() {

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Effect to load the count from localStorage when the component mounts
  useEffect(() => {
    const storedCount = localStorage.getItem('clickCount');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('clickCount', newCount);
    setIsVisible(true); // Make the text and count visible after click
  };

  return (
    <div>
      <h1>Review is successful</h1>
      <div className="slider1">
                            <video autoPlay muted playsInline style={{ width: '100%' }}>
                                <source src="./images/right.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
      <div style={styles.container}>
        <h1>Number Of Interview Taken</h1>
        <div className='review-btn'>
        <button style={styles.button} onClick={handleClick}>Click</button>
     <button> <Link to="/">Get Back</Link></button>
     </div>
        {isVisible && (
          <div className='review-p'>
          <p>Interview taken: {count} times</p> </div>// Show this only when button is clicked
        )}
      </div>

    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ReviewSuccesful;
