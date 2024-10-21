import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faIndustry, faMapMarkerAlt, faLink, faClipboardCheck, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';

import './CompanyInfo.css'; 

const CompanyInfo = () => {
    const [companyname, setcompanyname] = useState('');
    const [industry, setindustry] = useState('');
    const [location, setlocation] = useState('');
    const [weburl, setweburl] = useState('');
    const [license, setlicense] = useState('');
    const [contact, setcontact] = useState('');
    const [regno, setregno] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const addCompanyinfo = async () => {
        if (!companyname || !industry || !location || !weburl || !license || !contact || !regno) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("User"))._id;

        let result = await fetch("http://localhost:5000/company-info", {
            method: "post",
            body: JSON.stringify({ companyname, industry, location, weburl, license, contact, regno, userId }),
            headers: { "Content-type": "application/json" }
        });
        result = await result.json();
        //navigate("/");
    }

    return (
        <div className="company-info-container">
            <h2>Company Details</h2>
            <Link to="/candidateDetails">See Interviewers on NextGen-Hire</Link>

            <div className="input-container">
                <FontAwesomeIcon icon={faBuilding} className="input-icon2" />
                <input type='text' placeholder='Enter company name' onChange={(e) => setcompanyname(e.target.value)} value={companyname} />
                {error && !companyname && <span>Enter valid name</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faIndustry} className="input-icon2" />
                <input type='text' placeholder='Enter industry' onChange={(e) => setindustry(e.target.value)} value={industry} />
                {error && !industry && <span>Enter valid industry</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon2" />
                <input type='text' placeholder='Enter location' onChange={(e) => setlocation(e.target.value)} value={location} />
                {error && !location && <span>Enter valid location</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faLink} className="input-icon2" />
                <input type='text' placeholder='Enter website URL' onChange={(e) => setweburl(e.target.value)} value={weburl} />
                {error && !weburl && <span>Enter valid website URL</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faClipboardCheck} className="input-icon2" />
                <input type='text' placeholder='Enter company license' onChange={(e) => setlicense(e.target.value)} value={license} />
                {error && !license && <span>Enter valid license</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon2" />
                <input type='text' placeholder='Enter contact email' onChange={(e) => setcontact(e.target.value)} value={contact} />
                {error && !contact && <span>Enter valid contact email ID</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faIdCard} className="input-icon2" />
                <input type='number' placeholder='Enter reg No' onChange={(e) => setregno(e.target.value)} value={regno} />
                {error && !regno && <span>Enter valid registration number</span>}
            </div>
        <div className='mainee'>
            <div className='mainee-p'><p>This information is will remain confential</p></div>
            <div className="button-container">
                <button type='button' onClick={addCompanyinfo}>Submit</button>
                <Link to="/JobSpecification" className="next-link1">Next</Link>
                <Link to="/PastDomain" className="next-link1">recall</Link>
                </div>
            </div>
        </div>
    )
} 

export default CompanyInfo;
