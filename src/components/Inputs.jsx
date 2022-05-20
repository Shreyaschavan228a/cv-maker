import { useRef } from "react";

const Inputs = (props) => {
    const emailInput = useRef(null);
    // the regex below doesnt make much sense to me but it works
    // eslint-disable-next-line
    const regex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    const checkEmail = () => {
        const email = emailInput.current.value;
        if(!email.match(regex) && email !== ""){
            emailInput.current.classList.add("bad-input");
        }
        else{
            emailInput.current.classList.remove("bad-input");
        }
    }

    return (
        <div className="inputs">
            <div className="input-container">
                <label htmlFor="first-name">First-Name: </label>
                <input type="text" id="first-name" />
            </div>
            <div className="input-container">
                <label htmlFor="last-name">Last-Name: </label>
                <input type="text" id="last-name" />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" ref={emailInput} onBlur={()=>{checkEmail();}}/>
            </div>
            <div className="input-container">
                <label htmlFor="contact">Contact: </label>
                <input type="tel" id="contact" />
            </div>
            <div className="input-container">
                <label htmlFor="display-image">Image URL: </label>
                <input type="url" id="display-image" />
            </div>
        </div>
    );
};

export default Inputs;
