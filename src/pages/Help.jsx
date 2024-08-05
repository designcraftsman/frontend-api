import React from 'react';

function Help() {
    return (
        <div className="help-page f-flex flex-column mt-4">
            <h1 className="mb-4">Help & Support</h1>
            
            <section className="faq-section mb-5">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link text-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I create a new course?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div className="card-body">
                                To create a new course, navigate to the 'Make a new course' page from the main menu and fill out the required details.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed text-dark" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can I edit my profile?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div className="card-body">
                                To edit your profile, click on your profile picture in the top right corner and select 'Edit Profile' from the dropdown menu.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed text-dark" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do I reset my password?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div className="card-body">
                                To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section mb-5">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further assistance, please contact us:</p>
                <ul>
                    <li>Email: support@Immerse.com</li>
                    <li>Phone: +212 60000-0000</li>
                </ul>
            </section>

            <section className="resources-section mb-5">
                <h2>Useful Resources</h2>
                <ul>
                    <li><a href="/user-guide">User Guide</a></li>
                    <li><a href="/tutorial-videos">Tutorial Videos</a></li>
                    <li><a href="/community-forum">Community Forum</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Help;
