import { useRef } from "react";
import EducationInput from "./EducationInput";
import QualificationsInput from "./QualificationsInput";
import ExperienceInput from "./ExperienceInput";

const Inputs = (props) => {
    const {setCvData, cvData} = props;

    const emailInput = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const contact = useRef(null);
    const imgUrl = useRef(null);
 
    const checkEmail = () => {
        const email = emailInput.current.value;
        // the regex below doesnt make much sense to me but it works
        // eslint-disable-next-line
        const regex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";    
        if(!email.match(regex) && email !== ""){
            emailInput.current.classList.add("bad-input");
        }
        else{
            emailInput.current.classList.remove("bad-input");
        }
    }

    const updateCvData = (fieldName, fieldRef) => {
        //cant just do oldCvData = cvData because the second line then will directly modify the state
        let oldCvData = structuredClone(cvData);
        oldCvData[fieldName] = fieldRef.current.value;
        console.log(oldCvData, cvData);
        setCvData(oldCvData);
    }

    return (
        <div className="inputs">
            <div className="input-container">
                <label htmlFor="first-name">First-Name: </label>
                <input type="text" id="first-name" ref={firstName} onBlur={()=>{updateCvData("firstName", firstName)}} defaultValue={cvData.firstName}/>
            </div>
            <div className="input-container">
                <label htmlFor="last-name">Last-Name: </label>
                <input type="text" id="last-name" ref={lastName} onBlur={()=>{updateCvData("lastName", lastName)}} defaultValue={cvData.lastName}/>
            </div>
            <div className="input-container">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" ref={emailInput} onBlur={()=>{checkEmail(); updateCvData("email", emailInput)}} defaultValue={cvData.email}/>
            </div>
            <div className="input-container">
                <label htmlFor="contact">Contact: </label>
                <input type="tel" id="contact" ref={contact} onBlur={()=>{updateCvData("contact", contact)}} defaultValue={cvData.contact}/>
            </div>
            <div className="input-container">
                <label htmlFor="display-image">Image URL: </label>
                <input type="url" id="display-image" ref={imgUrl} onBlur={()=>{updateCvData("imgUrl", imgUrl)}} defaultValue={cvData.imgUrl}/>
            </div>
            <EducationInput cvData={cvData} setCvData={setCvData}/>
            <ExperienceInput cvData={cvData} setCvData={setCvData} />
            <QualificationsInput cvData={cvData} setCvData={setCvData} />
        </div>
    );
};

export default Inputs;
