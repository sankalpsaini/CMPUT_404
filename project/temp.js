import React from 'react';
import './Landing.css';
  
function Landing() {
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src="./social-distribution.png" />
                    </div>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#about2">Another Page</a></li>
                    <li><a href="#about3">And Another Page</a></li>
                </ul>
  
                <div className="rightNav">
                    <ul className='nav-list-right'>
                        <li><a href="#sign-in">Sign-In</a></li>
                        <li><a href="#sign-up">Sign-Up</a></li>
                    </ul>
                </div>
            </nav>
  
            <div>
                <section className="section">
                    <div className="box-main">
                        <div className="firstHalf">
                            <h1 className="text-big">
                                Heading 1
                            </h1>
                            <p className="text-small">
                                "Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit 
                                anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                Heading 2
                            </h1>
                            <p className="text-small">
                                "Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit 
                                anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                Heading 3
                            </h1>
                            <p className="text-small">
                                "Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit 
                                anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                Heading 4
                            </h1>
                            <p className="text-small">
                                "Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit 
                                anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    <img
                        className="landingImage"
                        alt="headshot"
                        src="./placeholder.png"
                    />
                </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default Landing