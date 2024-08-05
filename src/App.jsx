import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import UserMenu from './components/UserMenu';
import ContextMenu from './components/ContextMenu';
import Y from './assets/Y.png'; // Import your image

function App(props) {
  const [contextMenu, setContextMenu] = useState({ isVisible: false, position: { x: 0, y: 0 } });

  // Function to handle right-click (context menu)
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu
    setContextMenu({
      isVisible: true,
      position: { x: event.pageX, y: event.pageY },
    });
  };
  

  // Function to close the context menu
  const handleCloseMenu = () => {
    setContextMenu({ isVisible: false, position: { x: 0, y: 0 } });
  };

  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault(); // Prevent the default action of the link
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [showUserCollapse, setShowUserCollapse] = useState(false);

  const handleToggle = () => {
    setShowUserCollapse(!showUserCollapse);
  };

  const location = useLocation();
  const currentLink = location.pathname.split('/')[1] || 'dashboard'; // Default to 'dashboard' if path is '/'
  const noNavFooter = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/make-course';

  useEffect(() => {
    if (noNavFooter) {
      document.body.classList.add('sign-up-body');
      document.body.classList.add('make-course-up-body');
    } else {
      document.body.classList.remove('sign-up-body');
    }
  }, [noNavFooter]);

  // Return only Outlet if noNavFooter is true
  if (noNavFooter) {
    return <Outlet />;
  }

  return (
    <div className="container-fluid" data-bs-theme="light" onContextMenu={handleContextMenu}>
      <ContextMenu isVisible={contextMenu.isVisible} position={contextMenu.position} onClose={handleCloseMenu} />
      <div className="row">
        <Nav currentLink={currentLink} />
        <div className="content with-nav-footer">
          <div className="d-flex flex-row mb-3 justify-content-between">
            <div className="search-box d-flex flex-row mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                className="bi bi-search me-2"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <form action="./search" method="post">
                <input type="text" placeholder="Search" ref={inputRef} id="search" />
              </form>
            </div>
            <div className="p-2">
              <a
                href="notifications"
                className="text-secondary notifications-icon position-relative me-1 me-md-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
                <span className="notifications-number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  4
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
              <button
                type="button"
                id="toggleUserCollapse"
                className="user btn btn-link p-0"
                onClick={handleToggle}
              >
                <img src={Y} alt="profile" className="profile-img me-3" />
              </button>

              <div
                className={`z-3 collapse ${showUserCollapse ? 'show' : ''}`}
                id="userCollapse"
                style={{ position: 'absolute', top: '10%', right: '10%' }}
              >
                <div className="card card-body p-2 shadow-lg user-menu">
                  <h2 className="fw-normal p-3 fs-5">
                    Bonjour<span> {props.user.firstname} !</span>
                  </h2>
                  <hr className="m-1" />
                  <nav className="p-0">
                    <ul className="list-unstyled m-0 p-0 fs-6">
                      <li className="border-dark m-0 p-0 rounded-top">
                        <a
                          className="text-decoration-none d-block m-1 p-3 bg-dark3-on-hover"
                          href="profile"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill-check me-2" viewBox="0 0 16 16">
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                          <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                        </svg>                          
                        Profile
                        </a>
                      </li>
                      <li className="border-dark m-0 p-0 rounded-top">
                        <a
                          className="text-decoration-none d-block m-1 p-3 bg-dark3-on-hover"
                          href="settings"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear-wide me-2" viewBox="0 0 16 16">
                            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
                          </svg>
                          Settings
                        </a>
                      </li>
                      <hr></hr>
                      <li className="border-dark m-0 p-0">
                        <a
                          className="text-decoration-none d-block m-1 p-3 bg-dark3-on-hover"
                          href="sign-in"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-left me-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                          </svg>
                          Déconnexion
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer className="mt-3" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    </div>
  );
}

export default App;

