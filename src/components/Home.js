import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [showChatbot, setShowChatbot] = useState(false);

    useEffect(() => {
        // Chatbot integration script
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;
        script.setAttribute("chatbotId", "4LXthp7d4U8nAWNAWDTIF");
        script.setAttribute("domain", "www.chatbase.co");

        window.embeddedChatbotConfig = {
            chatbotId: "4LXthp7d4U8nAWNAWDTIF",
            domain: "www.chatbase.co",
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const toggleChatbot = () => {
        setShowChatbot(prev => !prev);
    };

    return (
        <div>
            <div className="hero-section">
                <nav className='NavBar'>
                    <div className="logo">
                        <h3>NextGen-Hire</h3>
                    </div>
                    <div className="login-home">
                        <a href="Home">Home</a>
                        <button>
                            Login
                        </button>
                    </div>
                </nav>
                <div className="heading">
                    <h1>Lets Take an Interview</h1>
                    <h1>to Another Level</h1>
                    <div className="para">
                        <p>
                            At NextGen-Hire, senior developers shape tech talent by streamlining the interview process and</p>
                        <p>efficiently assessing candidates while recommending the best talent to companies.</p>
                    </div>
                </div>
                <div className="card-parent1">
                    <div className="card1">
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Identification.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/CandiadteInfo"><h2>Candidate</h2></Link>
                                    <p>NextGen-Hire effortlessly connects companies with fresh talent, enabling them to share details about freshers and ensuring a strong fit for their specific hiring needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Business.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/companyInfo"><h2>Company</h2></Link>
                                    <p>NextGen-Hire connects companies with fresh talent effortlessly. Businesses can easily share information about freshers, ensuring a good fit for their needs and fostering successful hires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="feature-h2">
                        <h2>Feature Boxes</h2>
                    </div>
                    <div className="feature-p">
                        <p>A good design is not only aesthetically pleasing, but also functional</p>
                        <p>It should be able to solve the problem </p>
                    </div>
                    <div className="main-box">
                        {/* Your feature boxes here */}
                    </div>
                </div>
                <div className="img-slider">
                    <div className="slider">
                        <video autoPlay loop muted playsInline style={{ width: '100%' }}>
                            <source src="./images/vid-slider.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="GetTouch">
                    <div className="global">
                        <img src="./images/Global.png" alt="" />
                    </div>
                    <div className="form">
                        <h2>Get in touch</h2>
                        <div className="form-para">
                            <p>Your feedback helps us improve. Let us know what we’re doing well and.</p>
                            <p>where we can enhance your experience. </p>
                        </div>
                        <div className="input1">
                            <input type="email" placeholder='Enter your mail' />
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="input2">
                            <input type="text" placeholder='Feedback' />
                        </div>
                        <div className="form-btn">
                            <button>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>

                <footer style={{ backgroundColor: '#18181C', color: '#fff', padding: '20px', textAlign: 'center' }}>
                    <div className="footer-container">
                        <div className="about-us">
                            <h3>About Us</h3>
                            <p>NextGen-Hire connects companies with fresh talent. We ensure skilled candidates are referred by experienced developers.</p>
                        </div>
                        <div className="links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/Home"><p>Home</p></Link></li>
                                <li><Link to="/about"><p>About Us</p></Link></li>
                                <li><Link to="/services"><p>Services</p></Link></li>
                                <li><Link to="/contact"><p>Contact</p></Link></li>
                            </ul>
                        </div>

                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>Email: info@nextgen-hire.com</p>
                            <p>Phone: +1 (234) 567-8901</p>
                        </div>

                        <div className="social-media">
                            <h3>Follow Us</h3>
                            <Link to="#" target="_blank"><p>LinkedIn</p></Link>
                            <Link to="#" target="_blank"><p>Twitter</p></Link>
                            <Link to="#" target="_blank"><p>Facebook</p></Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 NextGen-Hire. All rights reserved.</p>
                    </div>
                </footer>
            </div>

            {/* Chatbot Icon (Click to toggle chatbot visibility) */}
            <div className="chatbot-icon" onClick={toggleChatbot}>
                <img src="./images/chatbot-icon.png" alt="Chatbot Icon" />
            </div>

            {/* Chatbot iframe (only visible when showChatbot is true) */}
            {showChatbot && (
                <div className="chatbot-container">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/4LXthp7d4U8nAWNAWDTIF"
                        width="400px"
                        height="600px"
                        frameBorder="0"
                        title="Chatbot"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default Home;
