import React, {useEffect , useState} from 'react';
import CourseCard from '../components/CourseCard.jsx';
import AssignementCard from '../components/AssignementCard.jsx';
import OffCanvasCourse from '../components/OffCanvasCourse.jsx';
import PropTypes from 'prop-types';
import { courseShape, assignmentShape } from '../types/types.js';

const Dashboard = ({ enrolledCourses = [],bookmarksCourses = [], recommendedCourses = [], assignments = [] }) => {


  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleShow = () => setShowOffCanvas(true);
  const handleClose = () => setShowOffCanvas(false);

  const removeExploreButton = () => {
    let exploreBtn = document.querySelector(".explore-button");
    if (exploreBtn) {
        exploreBtn.style.display = "none";
    }
};

    useEffect(() => {
        removeExploreButton();
    }, []);

  return (
    <div   className="dashboard">
      <div>
        <div id='enrolled'>
          <h4   className="mt-2">Enrolled Courses</h4>
          <div   className="row">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, index) => (
                <div   className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={handleShow} href="#"><CourseCard {...course} /></a>
                  <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                </div>
              ))
            ) : (
              <p>No enrolled courses available.</p>
            )}
          </div>
        </div>

        <div id='bookmarks'>
          <h4   className="mt-5">Bookmarks</h4>
          <div   className="row">
            {bookmarksCourses.length > 0 ? (
              bookmarksCourses.map((course, index) => (
                <div   className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={handleShow} href="#"><CourseCard {...course} /></a>
                  <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                </div>
              ))
            ) : (
              <p>No enrolled courses available.</p>
            )}
          </div>
        </div>

        <div   className="mt-5" id='topPicks'>
          <h4   className="mt-2">Top Picks for You</h4>
          <div   className="row">
            {recommendedCourses.length > 0 ? (
              recommendedCourses.map((course, index) => (
                <div   className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={handleShow} href="#"><CourseCard {...course} /></a>
                  <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                </div>
              ))
            ) : (
              <p>No recommended courses available.</p>
            )}
          </div>
        </div>

        <div   className="mt-5 mb-4" id='grades'>
          <h4   className="mt-2">Grades</h4>
          <div   className="row">
            {assignments.length > 0 ? (
              assignments.map((assignment, index) => (
                <div className="col-12  col-sm-6 col-md-6 mb-2" key={index}>
                  <AssignementCard {...assignment} />
                </div>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  enrolledCourses: PropTypes.arrayOf(courseShape),
  recommendedCourses: PropTypes.arrayOf(courseShape),
  assignments: PropTypes.arrayOf(assignmentShape),
};

Dashboard.defaultProps = {
  enrolledCourses: [],
  recommendedCourses: [],
  assignments: [],
};

export default Dashboard;
