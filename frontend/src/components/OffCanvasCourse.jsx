// OffCanvasCourse.jsx
import React from 'react';
import PropTypes from 'prop-types';

const OffCanvasCourse = ({ show, onClose, course }) => {
  return (
    <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" id="offCanvasCourse" aria-labelledby="offCanvasCourseLabel" style={{ visibility: show ? 'visible' : 'hidden' }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offCanvasCourseLabel">Course Details</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="offcanvas-body">
        <img src={course.previewImg} alt={course.name} className="img-fluid mb-3 rounded shadow" />
        <h6 className="fw-bold fs-5 mb-3"><em>{course.name}</em></h6>
        <p> <strong>Description :</strong> {course.description}</p>
        <p> <strong>Privacy :</strong> {course.type}</p>
        <p> <strong>Creator :</strong> <span className='underline'>{course.teacher}</span> </p>
        <button type="button" className="btn custom-button2 d-flex justify-content-center mt-3 px-5">Launch Experience</button>
      </div>
    </div>
  );
};

OffCanvasCourse.propTypes = {
  
    course: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string.isRequired ,
    teacher: PropTypes.string,
    previewImg: PropTypes.string,
    type: PropTypes.string // public or private
  }).isRequired,
};



export default OffCanvasCourse;
