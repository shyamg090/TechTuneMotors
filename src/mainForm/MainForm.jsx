import React, { useState } from 'react';
import './mainform.css';
import { BiArrowBack } from 'react-icons/bi';

import image from '../images/bannerimg.png';
import { Link } from 'react-router-dom';

const MainForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        alternativePhone: '',
        carType: '',
        serviceType: '',
        pricingType: '',
        pickupDate: '',
        additionalQueries: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // here
        console.log(formData);
    };

    return (
        <div className="form-container" style={{ background: `url(${image})` }} >

            <Link to={'/'} className="backButton">
                <BiArrowBack/>
            </Link>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Alternative Phone:</label>
                    <input type="tel" name="alternativePhone" value={formData.alternativePhone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Car Type:</label>
                    <select name="cars" id="cars" onClick={handleChange} >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Service Type:</label>
                    <select name="cars" id="cars" onClick={handleChange} >
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                        <option value="ultra">Ultra</option>
                    </select>
                </div>
                {/* <div className="form-group">
                    <label>Pricing Type:</label>
                    <input type="text" name="pricingType" value={formData.pricingType} onChange={handleChange} required />
                </div> */}
                <div className="form-group">
                    <label>Schedule Pickup:</label>
                    <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Additional Queries:</label>
                    <textarea name="additionalQueries" value={formData.additionalQueries} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MainForm;
