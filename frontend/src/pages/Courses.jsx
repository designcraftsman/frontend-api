import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CourseCard from '../components/CourseCard.jsx';
import { courseShape } from '../types/types.js';

function Courses() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
            navigate('/sign-in');
        } else {
            setToken(storedToken);
        }
    }, [navigate]);

    const getCourses = async () => {
        try {
            const response = await fetch('http://localhost:4200/courses/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }

            const jsonData = await response.json();
            setCourses(jsonData.courses);
        } catch (error) {
            console.error('Error:', error);
            setCourses([]); // Set courses to an empty array on error
        }
    };

    useEffect(() => {
        if (token) {
            getCourses();
        }
    }, [token]);
    return (
        <div className="course-list mt-4">
            <div className="course-list-columns course-head" style={{ height: "30px" }}>
                <div className="row">
                    <div className="col-12 col-md-2">Course of</div>
                    <div className="col-12 col-md-2">Field</div>
                    <div className="col-12 col-md-3">View</div>
                    <div className="col-12 col-md-3">Edit</div>
                </div>
            </div>
            {courses.length > 0 ? (
                courses.map((course) => (
                    <div key={course.idcourse} className="course rounded">
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <img className="rounded" src={course.idteacher} alt={`Preview of ${course.name}`} />
                            </div>
                            <div className="col-12 col-md-2">{course.name}</div>
                            <div className="col-12 col-md-2">{course.creationtime}</div>
                            <div className="col-12 col-md-3"><a href={course.maxvisitors}>View</a></div>
                            <div className="col-12 col-md-3"><a href={course.description}>Edit</a></div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(courseShape),
};

export default Courses;
