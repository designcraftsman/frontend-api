import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CourseCard(props) {
    const bookmarkEmpty = `<i class="bi bi-bookmark" title"save to bookmarks"></i>`;
    const bookmarkFilled = `<i class="bi bi-bookmark-fill"  title"unsave  "></i>`;

    const [isBookmarked, setIsBookmarked] = useState(props.bookmark);

    useEffect(() => {
        setIsBookmarked(props.bookmark);
    }, [props.bookmark]);

    const handleSaveToBookmarks = (event) => {
        event.stopPropagation(); // Prevent parent click events from firing
        event.preventDefault(); // Prevent default button behavior

        setIsBookmarked(prevState => {
            const newState = !prevState;
            // Call any external function here to save the new state if needed
            return newState;
        });
    };

    return (
        <div className="course-card rounded shadow small-scale-on-hover">
            <img className="rounded" src={props.previewImg} alt="course preview" />
            <h5 className="teacher-name mt-2">{props.teacher}</h5>
            <h6 className="course-name">{props.type} Course : {props.name}</h6>
            <p>Course</p>
            <div className='d-flex justify-content-end'>
                <button
                    style={{border:"none", backgroundColor:"inherit", fontSize:"1.2em"}}
                    id='saveToBookmarksBtn'
                    onClick={handleSaveToBookmarks}
                    dangerouslySetInnerHTML={{ __html: isBookmarked ? bookmarkFilled : bookmarkEmpty }}
                />
            </div>
        </div>
    );
}

CourseCard.propTypes = {
    id: PropTypes.number, 
    name: PropTypes.string, 
    teacher: PropTypes.string, 
    type: PropTypes.string, 
    previewImg: PropTypes.string,
    bookmark: PropTypes.bool
};

CourseCard.defaultProps = {
    id: 0, 
    name: "course name", 
    teacher: "teacher name", 
    type: "course type", 
    previewImg: "course preview image src",
    bookmark: false 
};

export default CourseCard;
