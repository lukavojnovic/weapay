import React, {useEffect, useState} from "react";
import "./About.css"
import sc from "../assets/sc.png"
import nj from "../assets/nina.png"
import krug from "../assets/dream.png"
import sz from "../assets/sz.png"
import so from "../assets/so.png"
import vaco from "../assets/vaco.png"

const About = () => {

    return (
        <div className="about-container">
            <div className="about-holder">
                <div className="about-mobile-title">O Aplikaciji</div>
                <div className="home-divider"/>
                <div className="home-divider-mobile"/>
                <div className="about-subtitle">
                    WeaPay je usluga mobilnog novčanika i mikroplaćanja namijenjena studentskoj populaciji.
                </div>
                <div className="about-thanks">
                    Zahvaljujemo na suradnji:
                </div>
                <div className="thanks-holder">
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={sc} alt="" className="special-image"/>
                        </div>
                        <div className="thanks-item-text">
                            Studentski centar Sveučilišta u Zagrebu
                        </div>
                    </div>
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={sz} alt="" className="special-image"/>
                        </div>
                        <div className="thanks-item-text">
                            Studentski zbor Sveučilišta u Zagrebu
                        </div>
                    </div>
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={krug} alt=""/>
                        </div>
                        <div className="thanks-item-text">
                            Dream <span className="text-dark"> Mobile Development</span>
                        </div>
                    </div>
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={so} alt=""/>
                        </div>
                        <div className="thanks-item-text">
                            Sedmi Odjel <span className="text-dark"> Cloud & Cyber Security</span>
                        </div>
                    </div>
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={vaco} alt=""/>
                        </div>
                        <div className="thanks-item-text">
                            Vaco <span className="text-dark"> Backoffice & E-money</span>
                        </div>
                    </div>
                    <div className="thanks-item">
                        <div className="image-holder-thanks-item">
                            <img src={nj} alt=""/>
                        </div>
                        <div className="thanks-item-text">
                            Nina Delić <span className="text-dark"> Dizajn</span>
                        </div>
                    </div>
                </div>
                <div className="thanks-holder-mobile">
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            Studentski centar <br/>Sveučilišta u Zagrebu
                        </div>
                        <img src={sc} alt=""/>
                    </div>
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            Studentski zbor <br/>Sveučilišta u Zagrebu
                        </div>
                        <img src={sz} alt=""/>
                    </div>
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            <div>
                                Dream <br/>
                                <div className="text-dark"> Mobile development</div>
                            </div>
                        </div>
                        <img src={krug} alt=""/>
                    </div>
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            <div>
                                Sedmi odjel <br/>
                                <div className="text-dark">Cloud & Cyber sigurnost</div>
                            </div>
                        </div>
                        <img src={so} alt=""/>
                    </div>
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            <div>
                                Vaco <br/>
                                <div className="text-dark">Back Office & E-money</div>
                            </div>
                        </div>
                        <img src={vaco} alt=""/>
                    </div>
                    <div className="thanks-item-mobile">
                        <div className="thanks-item-text">
                            <div>
                                Nina Delić <br/>
                                <div className="text-dark"> Dizajn</div>
                            </div>

                        </div>
                        <img src={nj} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About