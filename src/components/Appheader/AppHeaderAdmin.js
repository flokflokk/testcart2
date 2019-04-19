import React from "react";
import { Link } from "react-router-dom";
import "../../css/AppHeader.css"

const db = {
    position: "Admin",
    name: "Flok"
};

const AppHeaderAdmin = () => (

    <nav className="navbar colorBar" aria-label="main navigation" role="navigation">
        <div className="navbar-brand ">
            <a className="navbar-item" href="#" target="_blank">
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Devahoy LOGO"
                    width="112"
                    height="28"
                />
            </a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
                <Link to="/adminRegis" className="navbar-item">
                    Staff Registration
                </Link>
                <Link to="/admin" className="navbar-item">
                    Staff Information
                </Link>


                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link">

                        Hello {db.position}{" "}{db.name}
                    </Link>

                    <div className="navbar-dropdown">
                        <Link to="/changePassword">
                            <a className="navbar-item">
                                Change Password
                            </a>
                        </Link>
                        
                        {/*logout to LoginPage */}
                        <hr className="navbar-divider" />
                        <a className="navbar-item">
                            Log Out
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </nav>

);

export default AppHeaderAdmin;
