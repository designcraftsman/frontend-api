import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {email , password};
      try {
        const response = await fetch('http://localhost:4200/teachers/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('idteacher', data.id);
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    return  (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="card p-2 p-md-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" width="72" height="72" />
              <h1 className="h4 mt-3">
                Sign in to <span className="purple">Immerse</span>
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="sign-in-form">
              <div className="form-group mb-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input type="email" id="email" onChange ={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email" required autoFocus />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input type="password" id="password" onChange ={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Password" required />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" id="confirm" className="btn btn-purple btn-block custom-button">
                Sign In
              </button>
            </form>
            <div className="text-center mt-3">
              <a href="#" className="text-muted">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-2">
              <a href="./sign-up" className="text-muted">
                Don't have an account? Sign up
              </a>
            </div>
          </div>
        </div>
      );
 }
 export default SignIn;