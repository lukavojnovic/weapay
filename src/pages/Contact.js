import React, {useState} from "react";
import button from "../assets/button.png"

const Contact = () => {

    const [state, setState] = useState({
        subject: "",
        email: "",
        message: "",
    })

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
    }

    return (
        <div className="aboutUs-holder">
            <div>
                <div className="aboutUs-title">
                    Kontakt
                </div>
                <div className="divider"/>
                <div className="contact-data">
                    <div className="contact-subtitle">
                        Sva pitanja, pohvale ili pozdrave šalji na email <span
                        className="green-text">podrska@weapay</span> ili ispuni obrazac niže:
                    </div>
                </div>
                <div className="form-holder">
                    <form action="" autoComplete="off" onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <div className="input-holder">
                            <div className="label">Naziv</div>
                            <div className="input-field">
                                <input value={state.subject} name="subject" type="text" className="input" required
                                       onChange={(event => handleChange(event))}/>
                            </div>
                        </div>
                        <div className="input-holder">
                            <div className="label">Email adresa</div>
                            <div className="input-field">
                                <input name="email" type="email" className="input" required autoComplete="off"
                                       value={state.email}
                                       onChange={(event => handleChange(event))}/>
                            </div>
                        </div>
                        <div className="textarea-holder">
                            <textarea value={state.message} placeholder="Poruka" className="textarea" name="message"
                                      cols="30" rows="5"
                                      maxLength="300"
                                      onChange={(event => handleChange(event))}
                            />
                        </div>
                        <div className="button-holder">
                            <button type="submit" >
                                <img src={button} alt="" onClick=""/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact