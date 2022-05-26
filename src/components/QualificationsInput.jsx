import { useState, useRef} from "react";
import {v4 as uuidv4} from "uuid";

const QualificationsInput = (props) => {
    const {cvData, setCvData} = props;

    const [visible, setVisible] = useState(false);

    const SingleQualificationsInput = (props) => {
        const {objIndex, qualificationObj} = props;
        //eslint-disable-next-line
        const [id, setId] = useState(uuidv4());
        const qualification = useRef(null);

        const modifyObj = () => {
            let oldCvData = structuredClone(cvData);
            oldCvData.qualifications[objIndex] = qualification.current.value;
            setCvData(oldCvData);
        }

        return (
            <div className="single-input-container single-qualifications-input">
                <label htmlFor={"qualification-title-"+id}>{objIndex + 1}. </label>
                <input id={"qualification-title-"+id} defaultValue={qualificationObj} onBlur={()=>{modifyObj();}} ref={qualification}/>
                <div className="remove-btn-container"><button className="material-icons remove-btn" onClick={()=>{removeObj(objIndex)}}>delete</button></div>
            </div>
        )
    }

    const addObj = () => {
        let oldCvData = structuredClone(cvData);
        oldCvData.qualifications.push("");
        setCvData(oldCvData);
    }

    const removeObj = (objIndex) => {
        let oldCvData = structuredClone(cvData);
        oldCvData.qualifications.splice(objIndex, 1);
        setCvData(oldCvData);
    }

    return (
        <div className="multi-input-container qualifications-input">
            <label onClick={()=>{setVisible(!visible)}} className="multi-input-label">Qualifications: </label>
            {
                cvData.qualifications.length > 0 && visible && (
                    cvData.qualifications.map((elem, index)=>{
                        return (
                            <SingleQualificationsInput objIndex={index} qualificationObj={elem} key={index}/>
                        )
                    })
                )
            }
            {
                visible && (
                    <button key={0} className="add-btn material-icons md-36" onClick={()=>{addObj()}}>add</button>
                )
            }
        </div>
    )
}

export default QualificationsInput;