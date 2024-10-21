import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser,  faEnvelope, faPhone, faBriefcase,  faGraduationCap,  faMapMarkerAlt,  faIdCard ,  faClock  
} from '@fortawesome/free-solid-svg-icons';

import './CandidateInfo.css';

const CandidateInfo = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [domain, setdomain] = useState('');
    const [specialisation, setspecialisation] = useState('');
    const [workplace, setworkplace] = useState('');
    const [experience, setexperience] = useState('');
    const [linkedIn, setlinkedIn] = useState('');
    const [interviewexperience, setinterviewexperience] = useState('');
    const [time, settime] = useState('');
    const [Error, setError] = useState(false);

    const navigate = useNavigate();

    const addSenior = async () => {
        if (!name || !contact || !email || !domain || !specialisation || !workplace || !experience || !linkedIn || !interviewexperience || !time) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('User'))._id;

        let result = await fetch('http://localhost:5000/add-seniorInfo', {
            method: 'post',
            body: JSON.stringify({ name, contact, email, domain, specialisation, workplace, experience, linkedIn, interviewexperience, time, userId }),
            headers: { 'Content-type': 'application/json' },
        });
        result = await result.json();
        // navigate("/"); 
    };

    return (
        <div className="candidate-info-container">
            <h1>Senior Developer Profile</h1>

            <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon1" />
                <input type="text" placeholder="Enter full name" onChange={(e) => setname(e.target.value)} value={name} />
                {Error && !name && <span>Enter valid name</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon1" />
                <input type="number" placeholder="Enter contact number" onChange={(e) => setcontact(e.target.value)} value={contact} />
                {Error && !contact && <span>Enter valid number</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon1" />
                <input type="text" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} value={email} />
                {Error && !email && <span>Enter valid email</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                <input type="text" placeholder="Enter domain" onChange={(e) => setdomain(e.target.value)} value={domain} />
                {Error && !domain && <span>Enter valid domain</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faGraduationCap} className="input-icon1" />
                <input type="text" placeholder="Enter specialisation" onChange={(e) => setspecialisation(e.target.value)} value={specialisation} />
                {Error && !specialisation && <span>Enter valid specialisation</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon1" />
                <input type="text" placeholder="Enter workplace name" onChange={(e) => setworkplace(e.target.value)} value={workplace} />
                {Error && !workplace && <span>Enter valid workplace</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faIdCard} className="input-icon1" />
                <input type="number" placeholder="Enter experience" onChange={(e) => setexperience(e.target.value)} value={experience} />
                {Error && !experience && <span>Enter valid experience</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon1" />
                <input type="text" placeholder="Enter LinkedIn URL" onChange={(e) => setlinkedIn(e.target.value)} value={linkedIn} />
                {Error && !linkedIn && <span>Enter valid LinkedIn</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faIdCard} className="input-icon1" />
                <input type="number" placeholder="Enter number of interviews" onChange={(e) => setinterviewexperience(e.target.value)} value={interviewexperience} />
                {Error && !interviewexperience && <span>Enter valid interview experience</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faClock} className="input-icon1" />
                <input type="text" placeholder="Enter time available" onChange={(e) => settime(e.target.value)} value={time} />
                {Error && !time && <span>Enter valid time</span>}
            </div>

            <div className="button-container">
                <button type="button" onClick={addSenior}>Add</button>
               <button> <Link to="/DomainSelection" className="next-link4">Next</Link></button>
            </div>
        </div>
    );
};

export default CandidateInfo;
