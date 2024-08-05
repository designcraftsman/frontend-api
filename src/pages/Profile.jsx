import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import Y from "../assets/Y.png";
import { studentShape } from '../types/types.js';

function Profile({ user }) {
    const [showPassword, setShowPassword] = useState(false);


    const removeExploreButton = () => {
        let exploreBtn = document.querySelector(".explore-button");
        if (exploreBtn) {
            exploreBtn.style.display = "none";
        }
    };

    useEffect(() => {
        removeExploreButton();
    }, []);

    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                document.getElementById('profileImage').src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="profile ms-0 ms-md-5 mt-3">
            <div>
                <div className="d-flex flex-row align-items-start">
                    <div className="profile-image-container">
                        <img src={user.profile} id="profileImage" className="img-thumbnail shadow" alt="Profile Image" />
                        <div className="edit-icon scale-on-hover" role="button">
                            <label htmlFor="profileImageInput" role='button'>
                                <i className="bi bi-camera-fill fs-6 p-1"></i>
                            </label>
                            <input type="file" id="profileImageInput" onChange={previewImage} style={{ display: 'none' }} accept="image/*" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="user-id-container mt-1">
                            Your user id is: <span className="user-id" role="button">{user.id}</span>
                        </div>
                        <form>
                            <div className="form-group row mt-2">
                                <div className="col-6">
                                    <label htmlFor="firstname" className="col-form-label">Firstname</label>
                                    <input type="text" name="firstname" className="form-control shadow-sm" id="firstname" defaultValue={user.firstname} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="lastname" className="col-form-label">Lastname</label>
                                    <input type="text" className="form-control shadow-sm" name="lastname" id="lastname" defaultValue={user.lastname} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-6">
                                    <label htmlFor="gender" className="col-form-label">Gender</label>
                                    <select name="gender" id="gender" className="form-select shadow-sm" aria-label="Default select example" defaultValue={user.gender}>
                                        <option value="" disabled>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-6">
                                    <label htmlFor="birthdate" className="col-form-label">Birthdate</label>
                                    <input type="date" name="birthdate" className="form-control shadow-sm" id="birthdate" defaultValue={user.birthdate} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12" title="You cannot change the email you signed up with">
                                    <label htmlFor="email" className="col-form-label">Email <span className="text-danger"><b>*</b></span></label>
                                    <input type="email" name="email" className="form-control shadow-sm" defaultValue={user.email} id="email" readOnly />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        id="password" 
                                        className="form-control shadow-sm" 
                                        defaultValue={user.password} 
                                    />
                                    <div className="input-group-append h-100">
                                        <span 
                                            className="input-group-text shadow-sm py-2" 
                                            role="button" 
                                            id="togglePassword" 
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn custom-button2 px-5 mt-2" data-bs-toggle="modal" data-bs-target="#confirmSave">Save</button>
                            <div className="modal fade" id="confirmSave" tabIndex="-1" aria-labelledby="confirmSaveLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="confirmSaveLabel">Confirm updates</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-success">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    user: studentShape.isRequired,
};

export default Profile;
