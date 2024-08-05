import React from 'react';
import PropTypes from 'prop-types';
import { studentShape } from '../types/types.js';
import defaultUserProfile from '../assets/group-profiles/user.avif';

const Students = ({ students }) => {
  return (
    <div   className="students mt-5">
      <table   className="table shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Courses Attended</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr scope="row"   className="small-scale-on-hover" key={index}>
              <td>
                <img   className="profile-img" src={defaultUserProfile} alt="profile" />
                <span   className="ms-2">{student.firstname} {student.lastname} / <span   className="gender">{student.gender === 'm' ? 'He' : 'She'}</span></span>
              </td>
              <td>{student.id}</td>
              <td>{student.email}</td>
              <td>10</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Students.propTypes = {
  students: PropTypes.arrayOf(studentShape).isRequired,
};

export default Students;
