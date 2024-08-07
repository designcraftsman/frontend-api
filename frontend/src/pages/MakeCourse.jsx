import React, { useState } from 'react';
import CourseDetailsPage from '../components/CourseDetailsPage';
import FileUploadPage from '../components/FileUploadPage';
import AdditionalAssetsPage from '../components/AdditionalAssetsPage';
import CoursePreviewPage from '../components/CoursePreviewPage';

const MakeCourse = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        type: '',
        category: '',
        environment: '',
        privacy: '',
        coursePDF: '',
        video: '',
        additionalAssets: [],
    });

    const handleNext = () => {
        const currentForm = document.querySelectorAll('.carousel-item form')[currentIndex];
        if (currentForm) {
            if (currentForm.checkValidity()) {
                $('#courseCarousel').carousel('next');
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                currentForm.reportValidity();
            }
        } else {
            // If no form found (last page), just move to the next page
            $('#courseCarousel').carousel('next');
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            $('#courseCarousel').carousel('prev');
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleConfirm = () => {
        // Handle final confirmation logic here
        console.log('Course confirmed:', courseData);
    };

    return (
        <div id="courseCarousel" className="carousel slide" data-bs-ride="false">
            <div className='p-2'>
                <a className='fs-5' href="javascript:history.back()">
                    <div className="custom-button2 rounded-circle fs-4 px-3">
                        <i className="bi bi-arrow-left"></i>
                    </div>&nbsp;
                    <span className='underline'>Go back</span>
                </a>
            </div>
            <div className="carousel-inner">
                <CourseDetailsPage setCourseData={setCourseData} />
                <FileUploadPage setCourseData={setCourseData} />
                <AdditionalAssetsPage setCourseData={setCourseData} />
                <CoursePreviewPage courseData={courseData} onConfirm={handleConfirm} />
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
            <button
                className="btn custom-button2 text-light shadow"
                id='previous-carousel-page-btn'
                onClick={handlePrev}
                style={{ display: currentIndex === 0 ? 'none' : 'inline-block' }}
                >
                Previous
            </button>                
            <button className="btn custom-button2 text-light shadow" onClick={handleNext}>{currentIndex == 3 ? "Confirm" : "Next"}</button>
            </div>
        </div>
    );
};

export default MakeCourse;

