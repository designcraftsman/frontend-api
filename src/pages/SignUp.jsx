import logo from "../assets/logo.png";
import React, { useState } from 'react';

function SignUp() {
    const [userType, setUserType] = useState('');
    const [source, setSource] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        specialization: '',
        birthdate: '',
        email: '',
        password1: '',
        password2: ''
    });

    const [isFormValid, setIsFormValid] = useState({
        userType: false,
        source: false,
        personalInfo: false
    });

    const validateForm = () => {
        const personalInfoValid = Object.values(formData).every(field => field !== '' && field !== null);
        setIsFormValid({
            userType: userType !== '',
            source: source !== '',
            personalInfo: personalInfoValid
        });
        return userType !== '' && source !== '' && personalInfoValid;
    };

    const handleCarouselControl = (direction) => {
        if (validateForm()) {
            const carousel = document.querySelector('#carouselExampleControls');
            const carouselInstance = new Carousel(carousel);
            direction === 'next' ? carouselInstance.next() : carouselInstance.prev();
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <>
            {/* Sign up for med to large devices */}
            <div className="container-fluid m-auto p-0" id="medium-to-large-device-sign-up">
                {/* Left Panel */}
                <div className="left-panel">
                    <div>
                        <img src={logo} alt="Logo" width="100" height="100" />
                        <h1 className="h4 mt-3">Sign up to <span className="purple">Immerse</span></h1>
                    </div>
                </div>

                {/* Right Panel: Carousel */}
                <div className="right-panel">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* Page 1: User Type */}
                            <div className="carousel-item active">
                                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                                    <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                        <form className="sign-up-form row">
                                            <div className="form-group mb-3">
                                                <label htmlFor="userType" className="form-label">Are you a: <span className="text-danger">*</span></label>
                                                <select
                                                    id="userType"
                                                    className="form-select"
                                                    required
                                                    value={userType}
                                                    onChange={e => setUserType(e.target.value)}
                                                >
                                                    <option value="" disabled>Select...</option>
                                                    <option value="student">Student</option>
                                                    <option value="teacher">Teacher</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Page 2: Source */}
                            <div className="carousel-item">
                                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                                    <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                        <form className="sign-up-form row">
                                            <div className="form-group mb-3">
                                                <label htmlFor="source" className="form-label">How did you hear about us? <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    id="source"
                                                    className="form-control"
                                                    placeholder="Enter source"
                                                    required
                                                    value={source}
                                                    onChange={e => setSource(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Page 3: Sign Up Form */}
                            <div className="carousel-item">
                                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                                    <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                        <form className="sign-up-form row">
                                            <div className="form-group mb-3 col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    id="firstname"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    required
                                                    value={formData.firstname}
                                                    onChange={e => setFormData({ ...formData, firstname: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group mb-3 col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    required
                                                    value={formData.lastname}
                                                    onChange={e => setFormData({ ...formData, lastname: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group mb-3 col-12">
                                                <select
                                                    name="specialization"
                                                    id="specialization"
                                                    className="form-control text-secondary custom-select p-0 ps-2"
                                                    required
                                                    value={formData.specialization}
                                                    onChange={e => setFormData({ ...formData, specialization: e.target.value })}
                                                >
                                                    <option value="Mecanics">Mecanics</option>
                                                    <option value="Maths">Maths</option>
                                                    <option value="Electronics">Electronics</option>
                                                    <option value="Software">Software</option>
                                                    <option value="Geology">Geology</option>
                                                    <option value="Physics">Physics</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="date"
                                                    id="birthdate"
                                                    className="form-control"
                                                    placeholder="Birthdate"
                                                    required
                                                    value={formData.birthdate}
                                                    onChange={e => setFormData({ ...formData, birthdate: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    required
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="password"
                                                    id="password1"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                    value={formData.password1}
                                                    onChange={e => setFormData({ ...formData, password1: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="password"
                                                    id="password2"
                                                    className="form-control"
                                                    placeholder="Confirm Password"
                                                    required
                                                    value={formData.password2}
                                                    onChange={e => setFormData({ ...formData, password2: e.target.value })}
                                                />
                                            </div>
                                            <button type="submit" className="btn custom-button2 btn-block">Create Account</button>
                                        </form>
                                        <div className="text-center mt-2">
                                            <a href="./sign-in" className="text-muted">Already have an account? <span className="underline">Sign in</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="carousel-controls">
                            <button type="button" className="btn" onClick={() => handleCarouselControl('prev')}>
                                Previous
                            </button>
                            <button type="button" className="btn" onClick={() => handleCarouselControl('next')}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign up for small devices */}
            <div className="container d-flex justify-content-center p-0 align-items-center min-vh-100 m-auto" id="small-device-sign-up">
                <div id="carouselExampleSmallDevices" className="carousel slide">
                    <div className="carousel-inner">
                        {/* Page 1: User Type */}
                        <div className="carousel-item active">
                            <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                <div className="text-center mb-2">
                                    <img src={logo} alt="Logo" width="72" height="72" />
                                    <h1 className="h4 mt-3">Sign up to <span className="purple">Immerse</span></h1>
                                </div>
                                <form className="sign-up-form row">
                                    <div className="form-group mb-3 col-12">
                                        <label htmlFor="userType" className="form-label">Are you a: <span className="text-danger">*</span></label>
                                        <select
                                            id="userType"
                                            className="form-select"
                                            required
                                            value={userType}
                                            onChange={e => setUserType(e.target.value)}
                                        >
                                            <option value="" disabled>Select...</option>
                                            <option value="student">Student</option>
                                            <option value="teacher">Teacher</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Page 2: Source */}
                        <div className="carousel-item">
                            <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                <form className="sign-up-form row">
                                    <div className="form-group mb-3">
                                        <label htmlFor="source" className="form-label">How did you hear about us? <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            id="source"
                                            className="form-control"
                                            placeholder="Enter source"
                                            required
                                            value={source}
                                            onChange={e => setSource(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Page 3: Sign Up Form */}
                        <div className="carousel-item">
                            <div className="card p-2 p-md-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                                <form className="sign-up-form row">
                                    <div className="form-group mb-3 col-12 col-md-6">
                                        <input
                                            type="text"
                                            id="firstname"
                                            className="form-control"
                                            placeholder="First Name"
                                            required
                                            value={formData.firstname}
                                            onChange={e => setFormData({ ...formData, firstname: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-12 col-md-6">
                                        <input
                                            type="text"
                                            id="lastname"
                                            className="form-control"
                                            placeholder="Last Name"
                                            required
                                            value={formData.lastname}
                                            onChange={e => setFormData({ ...formData, lastname: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-12">
                                        <select
                                            name="specialization"
                                            id="specialization"
                                            className="form-control form-select p-0 ps-2"
                                            required
                                            value={formData.specialization}
                                            onChange={e => setFormData({ ...formData, specialization: e.target.value })}
                                        >
                                            <option value="Mecanics">Mecanics</option>
                                            <option value="Maths">Maths</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Software">Software</option>
                                            <option value="Geology">Geology</option>
                                            <option value="Physics">Physics</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="date"
                                            id="birthdate"
                                            className="form-control"
                                            placeholder="Birthdate"
                                            required
                                            value={formData.birthdate}
                                            onChange={e => setFormData({ ...formData, birthdate: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email"
                                            required
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            id="password1"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            value={formData.password1}
                                            onChange={e => setFormData({ ...formData, password1: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            id="password2"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            required
                                            value={formData.password2}
                                            onChange={e => setFormData({ ...formData, password2: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="btn custom-button2 btn-block">Create Account</button>
                                </form>
                                <div className="text-center mt-2">
                                    <a href="./sign-in" className="text-muted">Already have an account? <span className="underline">Sign in</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <a className="carousel-control-prev shadow" href="#carouselExampleSmallDevices" role="button" onClick={() => handleCarouselControl('prev')}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next shadow me-3" href="#carouselExampleSmallDevices" role="button" onClick={() => handleCarouselControl('next')}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default SignUp;
