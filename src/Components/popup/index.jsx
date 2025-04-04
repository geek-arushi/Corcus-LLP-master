// PopupForm.jsx
import React, { useState } from 'react';

function PopupForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        privacyPolicy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose(); // Close after submit
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <h2>Contact Us</h2>
                <p>Please write your message and contact information below.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Type your message here!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onChange={handleChange}
                            required
                        />
                        <label>
                            I agree to the <a href="#">Privacy Policy</a>.
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PopupForm;