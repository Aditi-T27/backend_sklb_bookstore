import React, { useState } from 'react';
import './login.css';

function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (identifier.trim() === '') {
            isValid = false;
            setIdentifierError('Mobile/Email is required');
        } else {
            setIdentifierError('');
        }

        if (password.trim() === '') {
            isValid = false;
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const showPopup = (message) => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerText = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            showPopup('YOU LOGGED IN SUCCESSFULLY');
        }
    };

    const handleOTPClick = () => {
        alert('Request OTP functionality is not implemented.');
    };

    const handleGoogleClick = () => {
        alert('Google Login functionality is not implemented.');
    };

    return (
        <div className="login-container">
            <form id="loginForm" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="login-form-group">
                    <label htmlFor="identifier">Mobile/Email</label>
                    <input
                        type="text"
                        id="identifier"
                        name="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                    <span className="login-error" id="identifierError">{identifierError}</span>
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="login-error" id="passwordError">{passwordError}</span>
                </div>
                <div className="login-form-group">
                    <a href="#" id="forgotPassword">Forgot your password?</a>
                </div>
                <div className="login-form-group">
                    <button type="submit" id="loginButton">Login</button>
                    <h3 style={{ textAlign: 'center' }}>OR</h3>
                    <button type="button" id="otpButton" onClick={handleOTPClick}>Request OTP</button>
                </div>
                <div className="login-google-login">
                    <button type="button" id="googleButton" onClick={handleGoogleClick}>
                        <img src="https://img.icons8.com/?size=96&id=17949&format=png" alt="Google Icon" /> Login with Google
                    </button>
                </div>
                <div className="login-signup">
                    <p>New to this? <a href="#" id="signUpLink">Sign up</a></p>
                </div>
                <div className="login-terms">
                    <p>By continuing I agree to the <a href="#" id="termsLink">terms of use</a> and <a href="#" id="privacyLink">privacy policy</a>.</p>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
