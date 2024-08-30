// // import React from 'react';
// import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';

// function App() {
//   return (
//     <div className="App">
//       <SignUpForm />
//       <LoginForm />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './styles.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="App">
      <h1 className="welcome">Welcome to DigiLibrary</h1>
      <div className="form-container">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <button className="toggle-button" onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default App;

