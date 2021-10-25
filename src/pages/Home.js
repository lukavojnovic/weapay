import React from "react";
import mobile from "../assets/mobile.png"
import appstore from "../assets/appstore.png"
import googleplay from "../assets/googleplay.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import tictoc from "../assets/tictoc.png"
import scLogo from "../assets/sc-logo.png"

const Home = () => {
    return (
        <div className="home-container">

            <div className="home-gradient-container"/>
            <div className="sc-logo"><img src={scLogo} alt=""/></div>
            <div className="title-image-holder">
                <div className="home-left">
                    <div className="title-holder">
                        <div>PLATI BRŽE,</div>
                        <div>UŽIVAJ DUŽE.</div>
                    </div>
                    <div className="divider"/>
                    <div className="weapay-title">
                        WeaPay.
                    </div>
                    <div className="stores">
                        <a href="#"><img src={appstore} alt="" className="margin-right-24"/></a>
                        <a href="#"><img src={googleplay} alt="" className="margin-right-24"/></a>
                    </div>
                </div>
                <div className="home-right">
                    <img src={mobile} alt=""/>
                </div>
            </div>

            <div className="title-image-holder-mobile">
                <div className="home-left">
                    <div className="relative">
                        <div className="sc-logo-mobile"><img src={scLogo} alt=""/></div>
                        <img className="mobile-image" src={mobile} alt=""/>
                        <div className="title-holder">
                            <div>PLATI BRŽE,</div>
                            <div>UŽIVAJ DUŽE.</div>
                        </div>

                    </div>
                    <div className="divider"/>
                    <div className="weapay-title">
                        WeaPay.
                    </div>
                </div>
            </div>

            <div className="footer">
                <div></div>
                <div className="copyright">© 2021 WeaPay</div>

                <div className="d-flex">
                    <a href="#"> <img src={facebook} alt="" className="margin-right-20"/></a>
                    <a href="#"> <img src={instagram} alt="" className="margin-right-20"/></a>
                    <a href="#"> <img src={tictoc} alt=""/></a>
                </div>
            </div>

            <div className="footer-mobile">
                <div></div>
                <div className="stores">
                    <a href="#"><img src={appstore} alt="" className="margin-right-24"/></a>
                    <a href="#"><img src={googleplay} alt="" className="margin-right-24"/></a>
                </div>
                <div className="d-flex">
                    <a href="#"> <img src={facebook} alt="" className="margin-right-20"/></a>
                    <a href="#"> <img src={instagram} alt="" className="margin-right-20"/></a>
                    <a href="#"> <img src={tictoc} alt=""/></a>
                </div>
                <div className="copyright">© 2021 WeaPay</div>
            </div>
        </div>
    );
}


export default Home