import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { studentShape } from '../types/types.js';

function Profile(props) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [teacher, setTeacher] = useState({});
  const [idTeacher, setIdTeacher] = useState(null);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [specialisation, setSpecialization] = useState('');
  const [gender, setGender] = useState('');

  const dateConverter = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  useEffect(() => {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
  }, []);

  useEffect(() => {
      const storedIdTeacher = localStorage.getItem('idteacher');
      setIdTeacher(storedIdTeacher);
  }, []);

  useEffect(() => {
      if (token) {
          getTeacher();
      }
  }, [token]);

  const getTeacher = async () => {
      if (!token) {
          navigate('/sign-in');
          return;
      }
      try {
          const response = await fetch(`http://localhost:4200/teachers/get/${idTeacher}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
          });
          if (!response.ok) {
              throw new Error('Failed to fetch teacher');
          }

          const teacherData = await response.json();
          setTeacher(teacherData);
          setFirstName(teacherData.firstname);
          setLastName(teacherData.lastname);
          setEmail(teacherData.email);
          setBirthDate(dateConverter(teacherData.birthdate));
          setSpecialization(teacherData.specialisation);
          setGender(teacherData.gender);
      } catch (error) {
          console.error('Error:', error);
      }
  };

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

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const formData = { firstname, lastname, email, birthdate, specialisation, gender };
          const response = await fetch(`http://localhost:4200/teachers/update/${idTeacher}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(formData),
          });
          console.log(formData);
          const data = await response.json();
          if (data.success) {
              console.log('Info updated successfully');
          }
      } catch (error) {
          console.log("error:", error.message);
      }
  };

  return (
      <div className="profile ms-0 ms-md-5 mt-3">
          <div>
              <div className="d-flex flex-row align-items-start">
                  <div className="profile-image-container">
                      <img src={props.user.profile} id="profileImage" className="img-thumbnail shadow" alt="Profile Image" />
                      <div className="edit-icon scale-on-hover" role="button">
                          <label htmlFor="profileImageInput" role='button'>
                              <i className="bi bi-camera-fill fs-6 p-1"></i>
                          </label>
                          <input type="file" id="profileImageInput" onChange={previewImage} style={{ display: 'none' }} />
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-9">
                      <div className="user-id-container mt-1">
                          Your user id is: <span className="user-id" role="button">{teacher.idteacher}</span>
                      </div>
                      <form onSubmit={handleSubmit}>
                          <div className="form-group row mt-2">
                              <div className="col-6">
                                  <label htmlFor="firstname" className="col-form-label">Firstname</label>
                                  <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} className="form-control shadow-sm" id="firstname" value={firstname} />
                              </div>
                              <div className="col-6">
                                  <label htmlFor="lastname" className="col-form-label">Lastname</label>
                                  <input type="text" className="form-control shadow-sm" onChange={(e) => setLastName(e.target.value)} name="lastname" id="lastname" value={lastname} />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-6">
                                  <label htmlFor="gender" className="col-form-label">Gender</label>
                                  <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className="form-select shadow-sm" aria-label="Default select example" value={gender}>
                                      <option value="" disabled>Select gender</option>
                                      <option value="homme">Male</option>
                                      <option value="femme">Female</option>
                                      <option value="autre">Other</option>
                                  </select>
                              </div>
                              <div className="col-6 mb-3">
                                  <label htmlFor="birthdate" className="col-form-label">Birthdate</label>
                                  <input type="date" name="birthdate" onChange={(e) => setBirthDate(e.target.value)} className="form-control shadow-sm" id="birthdate" value={birthdate} />
                              </div>
                              <div className="col-6">
                                  <select name="specialization" id="specialization" onChange={(e) => setSpecialization(e.target.value)} className="form-control text-secondary custom-select p-0 ps-2" value={specialisation} required>
                                      <option value="Mecanics">Mechanics</option>
                                      <option value="Maths">Maths</option>
                                      <option value="Electronics">Electronics</option>
                                      <option value="Software">Software</option>
                                      <option value="Geology">Geology</option>
                                      <option value="Physics">Physics</option>
                                  </select>
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-12" title="You cannot change the email you signed up with">
                                  <label htmlFor="email" className="col-form-label">Email <span className="text-danger"><b>*</b></span></label>
                                  <input type="email" name="email" className="form-control shadow-sm" onChange={(e) => setEmail(e.target.value)} value={email} id="email" disabled />
                              </div>
                          </div>
                          <button type="button"  className="btn custom-button2 px-5 mt-2" data-bs-toggle="modal" data-bs-target="#confirmSave">Save</button>
                          <div className="modal fade" id="confirmSave" tabIndex="-1" aria-labelledby="confirmSaveLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                  <div className="modal-content">
                                      <div className="modal-header">
                                          <h1 className="modal-title fs-5" id="confirmSaveLabel">Confirm updates</h1>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                          <button type="submit"  className="btn btn-success">Save changes</button>
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
