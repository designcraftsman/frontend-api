import React, { useState } from 'react';

const FileUploadPage = ({ setCourseData }) => {
    const [coursePDF, setCoursePDF] = useState('');
    const [video, setVideo] = useState('');
    const [videoError, setVideoError] = useState('');
    const [videoPreview, setVideoPreview] = useState('');

    // Function to validate YouTube embed code
    const validateYouTubeEmbedCode = (embedCode) => {
        const youtubeRegex = /<iframe\s+width="\d+"\s+height="\d+"\s+src="https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+(\?[^\"]*)?"\s+title="[^"]*"\s+frameborder="\d+"\s+allow="[^"]*"\s+referrerpolicy="[^"]*"\s+allowfullscreen><\/iframe>/;
        return youtubeRegex.test(embedCode.trim());
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'video') {
            if (validateYouTubeEmbedCode(value)) {
                setVideoError('');
                setVideoPreview(value);  // Set valid video embed code to preview
            } else {
                setVideoError('Invalid YouTube embed code.');
                setVideoPreview('');  // Clear preview if invalid
            }
        }
        setCourseData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="carousel-item">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                    <h3 className="text-center mb-4">File Upload</h3>
                    <form className="course-form">
                        <div className="form-group mb-3">
                            <label htmlFor="coursePDF" className="form-label">Course PDF <span className="text-danger">*</span></label>
                            <input
                                type="file"
                                accept="application/pdf,application/vnd.ms-excel" 
                                id="coursePDF"
                                className="form-control"
                                onChange={(e) => { setCoursePDF(e.target.value); handleChange(e); }}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="video" className="form-label">
                                Video <span className="text-danger">*</span> 
                                <span><small><i>(please note that the video should be a YouTube embed code; any other format is not accepted)</i></small></span>
                            </label>
                            <textarea
                                type="text"
                                id="video"
                                className="form-control"
                                onChange={(e) => { setVideo(e.target.value); handleChange(e); }}
                                required
                            />
                            {videoError && <div className="text-danger mt-2">{videoError}</div>}
                            {videoPreview && (
                                <div className="mt-4">
                                    <h5>Video Preview:</h5>
                                    <div className="video-preview" dangerouslySetInnerHTML={{ __html: videoPreview }} />
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FileUploadPage;

