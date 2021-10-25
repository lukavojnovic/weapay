import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"
import "./Navigation.css"
import hamburger from "../assets/hamburger.png"
import cancel from "../assets/cancel.png"

const Navigation = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [active, isActive] = useState("");

    useEffect(() => {
        console.log(window.location.pathname)
        if (window.location.pathname.replace("/", "") === "about") {
            isActive("about")
        } else if (window.location.pathname.replace("/", "") === "contact") {
            isActive("contact")
        } else if (window.location.pathname.replace("/", "") === "aboutUs") {
            isActive("aboutUs")
        } else {
            isActive("home")
        }
    }, [])
    return (
        <div className="nav-container">
            <div className={`nav-button`} onClick={() => setIsVisible(true)}>
                <img src={hamburger} alt=""/>
            </div>

            <nav className="flex items-center justify-between navigation">
                <div className="w-auto lg:text-center">
                    <Link className="navItem" to="/">
                        <img src={logo} alt="logo" className=''/>
                    </Link>
                </div>
                <div className=" flex justify-end">
                    <Link className={`navItem mr-6 ${active === "about" ? "active" : ""}`}
                          to="/about">
                        O APLIKACIJI
                    </Link>
                    <Link className={`navItem mr-6 ${active === "aboutUs" ? "active" : ""}`}
                          to="/aboutUs">
                        O NAMA
                    </Link>
                    <Link className={`navItem ${active === "contact" ? "active" : ""}`}
                          to="/contact">
                        KONTAKT
                    </Link>
                </div>
            </nav>
            <div>
                <div className={`logo-mobile ${props.showLogo ? "flex" : "hidden"}`}>
                    <Link className="navItem" to="/">
                        <img src={logo} alt="logo" className=''/>
                    </Link>
                </div>
                <div className="nav-holder">
                <nav className={`navigation-mobile ${isVisible ? 'visible' : 'invisible'}`}>
                    <div className="cancel-button-holder">
                        <div className={`cancel-button ${isVisible ? "visible" : "invisible"}`} onClick={() => {
                            setIsVisible(false)
                        }}>
                            <img src={cancel} alt=""/>
                        </div>
                        <div className="item-holder-mobile">
                            <Link className={`navItem mr-6 ${active === "about" ? "active" : ""}`}
                                  to="/about">
                                O APLIKACIJI
                            </Link>
                            <Link className={`navItem mr-6 ${active === "aboutUs" ? "active" : ""}`}
                                  to="/aboutUs">
                                O NAMA
                            </Link>
                            <Link className={`navItem ${active === "contact" ? "active" : ""}`}
                                  to="/contact">
                                KONTAKT
                            </Link>
                        </div>
                    </div>
                </nav>
                </div>
            </div>

        </div>

    )
}

export default Navigation