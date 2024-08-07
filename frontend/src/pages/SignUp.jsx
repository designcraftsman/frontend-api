import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"

function SignUp(){
    const [userType, setUserType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [gender, setGender] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
            e.preventDefault();
            if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
            }
            try {
                if(userType=='teacher'){
                const formData = { firstName, lastName, email, password, birthDate, specialization, gender };
                const response = await fetch('http://localhost:4200/teachers/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                if (data.success) {
                    navigate('/sign-in');
                } else {
                    setError(data.message);
            }
             }else if(userType=='student'){
                const formData = { firstName, lastName ,birthDate, email, password , gender};
                const response = await fetch('http://localhost:4200/students/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                if (data.success) {
                    navigate('/sign-in');
                } else {
                    setError(data.message);
            }
            }else{
                throw new Error('Invalid user type');
            }
            } catch (error) {
            setError("An error occurred during registration :",error.message);
            }
        };

    return (
        <>
        {/*Sign up for med to large devices */}
        <div  className="container-fluid" id="medium-to-large-device-sign-up">
            {/* Left Panel  */}
            <div  className="left-panel">
                <div>
                    <img src={logo} alt="Logo" width="100" height="100" />
                    <h1  className="h4 mt-3">Sign up to <span  className="purple">Immerse</span></h1>
                </div>
            </div>
        
            {/*Right Panel: Carousel */}
            <div  className="right-panel">
                <div id="carouselExampleControls"  className="carousel slide">
                    <div  className="carousel-inner">
                        {/*Page 1: User Type  */}
                        <div  className="carousel-item active">
                            <div  className="container d-flex justify-content-center align-items-center min-vh-100">
                                <div  className="card p-2 p-md-4 shadow-lg" style={{ width : "100%" ,maxWidth: "400px" }} >
        
                                    <form action="" method="post"  className="sign-up-form row">
                                        <div  className="form-group mb-3">
                                            <label for="userType"  className="form-label">Are you a: <span  className="text-danger">*</span></label>
                                            <select id="userType"  className="form-select" onChange={(e) => setUserType(e.target.value)} required>
                                                <option value="" disabled selected>Select...</option>
                                                <option value="student">Student</option>
                                                <option value="teacher">Teacher</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
        
                        {/* Page 2: Source */}
                        <div  className="carousel-item">
                            <div  className="container d-flex justify-content-center align-items-center min-vh-100">
                                <div  className="card p-2 p-md-4 shadow-lg" style={{ width: "100%" , maxWidth: "400px" }}>
                                    <form action="" method="post"  className="sign-up-form row">
                                        <div  className="form-group mb-3">
                                            <label for="source"  className="form-label">How did you hear about us ? <span  className="text-danger">*</span></label>
                                            <input type="text" id="source"  className="form-control" placeholder="Enter source" required />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
        
                        {/*Page 3: Sign Up Form */}                        
                        <div  className="carousel-item">
                            <div  className="container d-flex justify-content-center align-items-center min-vh-100">
                                <div  className="card p-2 p-md-4 shadow-lg" style={{ width: "100%" , maxWidth: "400px" }}>
                                    <form onSubmit={handleSubmit} className="sign-up-form row">
                                        <div  className="form-group mb-3 col-12 col-md-6">
                                            <input type="text" id="firstname"  className="form-control" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                                        </div>
                                        <div  className="form-group mb-3 col-12 col-md-6">
                                            <input type="text" id="lastname"  className="form-control" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                                        </div>
                                        <div  className="form-group mb-3 col-12">
                                            <select name="specialization" id="specialization" onChange={(e) => setSpecialization(e.target.value)} className="form-control text-secondary custom-select p-0 ps-2" required>
                                                <option value="Mecanics">Mecanics</option>
                                                <option value="Maths">Maths</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Software">Software</option>
                                                <option value="Geology">Geology</option>
                                                <option value="Physics">Physics</option>
                                            </select>
                                        </div>
                                        <div  className="form-group mb-3">
                                            <input type="date" id="birthdate"  className="form-control" onChange={(e) => setBirthDate(e.target.value)} placeholder="Birthdate" required />
                                        </div>
                                        <div  className="form-group mb-3 col-12">
                                            <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className="form-control text-secondary custom-select p-0 ps-2" required>
                                                <option value="homme">Homme</option>
                                                <option value="femme">Femme</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                        <div  className="form-group mb-3">
                                            <input type="email" id="email"  className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                        </div>
                                        <div  className="form-group mb-3">
                                            <input type="password" id="password1"  className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                        </div>
                                        <div  className="form-group mb-3">
                                            <input type="password" id="password2"  className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                                        </div>
                                        {error && <p className="text-danger">{error}</p>}
                                        <button type="submit"  className="btn custom-button2 btn-block">Create Account</button>
                                    </form>
                                    <div  className="text-center mt-2">
                                        <a href="./sign-in"  className="text-muted">Already have an account? <span  className="undeline"> Sign in</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    {/* Carousel Controls */}
                    <div  className="carousel-controls">
                        <button type="button"  className="btn" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            Previous
                        </button>
                        <button type="button"  className="btn" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/*Sign up for small devices */}
        <div  className="container d-flex justify-content-center align-items-center min-vh-100" id="small-device-sign-up">
            <div id="carouselExampleSmallDevices"  className="carousel slide">
                <div  className="carousel-inner">
                    {/*Page 1: User Type  */}
                    <div  className="carousel-item active">
                        <div  className="card p-2 p-md-4 shadow-lg" style={{ width: "100%" , maxWidth: "400px" }}>
                            <div  className="text-center mb-2">
                                <img src={logo} alt="Logo" width="72" height="72" />
                                <h1  className="h4 mt-3">Sign up to <span  className="purple">Immerse</span></h1>
                            </div>
                            <form action="" method="post"  className="sign-up-form row">
                                <div  className="form-group mb-3 col-12">
                                    <label for="userType"  className="form-label">Are you a: <span  className="text-danger">*</span></label>
                                    <select id="userType"  className="form-select" required>
                                        <option value="" disabled selected>Select...</option>
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
    
                    {/* Page 2: Source  */}
                    <div  className="carousel-item">
                        <div  className="card p-2 p-md-4 shadow-lg" style={{ width: "100%" , maxWidth: "400px" }}>
                            <form action="" method="post"  className="sign-up-form row">
                                <div  className="form-group mb-3">
                                    <label for="source"  className="form-label">How did you hear about us? <span  className="text-danger">*</span></label>
                                    <input type="text" id="source"  className="form-control" placeholder="Enter source" required />
                                </div>
                            </form>
                        </div>
                    </div>
    
                    {/*  Page 3: Sign Up Form */}
                    <div  className="carousel-item">
                        <div  className="card p-2 p-md-4 shadow-lg" style={{ width: "100%" , maxWidth: "400px" }}>
                            <form onSubmit={handleSubmit}   className="sign-up-form row">
                                <div  className="form-group mb-3 col-12 col-md-6">
                                    <input type="text" id="firstname"  className="form-control" placeholder="First Name" required />
                                </div>
                                <div  className="form-group mb-3 col-12 col-md-6">
                                    <input type="text" id="lastname"  className="form-control" placeholder="Last Name" required />
                                </div>
                                <div  className="form-group mb-3 col-12">
                                    <select name="specialization" id="specialization"  className="form-control form-select p-0 ps-2" required>
                                        <option value="Mecanics">Mecanics</option>
                                        <option value="Maths">Maths</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Software">Software</option>
                                        <option value="Geology">Geology</option>
                                        <option value="Physics">Physics</option>
                                    </select>
                                </div>
                                <div  className="form-group mb-3">
                                    <input type="date" id="birthdate"  className="form-control" placeholder="Birthdate" required />
                                </div>
                                <div  className="form-group mb-3 col-12">
                                            <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className="form-control text-secondary custom-select p-0 ps-2" required>
                                                <option value="homme">Homme</option>
                                                <option value="femme">Femme</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                <div  className="form-group mb-3">
                                    <input type="email" id="email"  className="form-control" placeholder="Email" required />
                                </div>
                                <div  className="form-group mb-3">
                                    <input type="password" id="password1"  className="form-control" placeholder="Password" required />
                                </div>
                                <div  className="form-group mb-3">
                                    <input type="confirmedPassword" id="password2"  className="form-control" placeholder="Confirm Password" required />
                                </div>
                                <button type="submit"   className="btn custom-button2 btn-block">Create Account</button>
                            </form>
                            <div  className="text-center mt-2">
                                <a href="./sign-in"  className="text-muted">Already have an account? <span  className="underline">Sign in</span></a>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* Carousel controlls */}
                <a   className="carousel-control-prev shadow" href="#carouselExampleSmallDevices" role="button" data-bs-slide="prev">
                    <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span  className="visually-hidden">Previous</span>
                </a>
                < a   className="carousel-control-next shadow" href="#carouselExampleSmallDevices" role="button" data-bs-slide="next">
                    <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span  className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
        </>
    );
 }
 export default SignUp;