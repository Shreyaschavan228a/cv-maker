import { useState, useRef } from "react";
import {v4 as uuidv4} from "uuid";

const EducationInput = (props) => {
    
    const {cvData, setCvData} = props;
    const [visible, setVisible] = useState(false);

    //!!! taking this component outside breaks default values of inputs. check why
    const SingleEducationInput = (props) => {
        const {objIndex, eduObj} = props;
        //eslint-disable-next-line
        const [id, setId] = useState(uuidv4());
        const title = useRef(null);
        const description = useRef(null);
        const timeRange = useRef(null);
        
        const modifyObj = (fieldName, fieldRef) => {
            let oldCvData = structuredClone(cvData);
            oldCvData.education[objIndex][fieldName] = fieldRef.current.value;
            setCvData(oldCvData);
        }

        return (
            <div className="input-container single-input-container single-education-input">
                <div className="input-container">
                    <label htmlFor={"education-title-"+id}>Title: </label>
                    <input type="text" id={"education-title-"+id} defaultValue={eduObj.title} ref={title} onBlur={()=>{modifyObj("title", title)}}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor={"education-description-"+id}>Description: </label>
                    <input type="text" id={"education-description-"+id} defaultValue={eduObj.description} ref={description} onBlur={()=>{modifyObj("description", description)}}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor={"education-timeRange-"+id}>Time Range: </label>
                    <input type="text" id={"education-timeRange-"+id} defaultValue={eduObj.timeRange} ref={timeRange} onBlur={()=>{modifyObj("timeRange", timeRange)}}/>
                </div>
    
                <div className="remove-btn-container">
                    <button className="remove-btn material-icons md-36" onClick={()=>{removeObj(objIndex)}}>delete</button>
                </div>
            </div>
        );
    }


    const addObj = () => {
        let oldCvData = structuredClone(cvData);
        oldCvData.education.push({"title": "", "description": "", "timeRange": ""});
        setCvData(oldCvData);
    }

    const removeObj = (objIndex) =>{
        let oldCvData = structuredClone(cvData);
        oldCvData.education.splice(objIndex, 1);
        setCvData(oldCvData);
    }

    return (
        <div className="education-input multi-input-container">
            <label onClick={()=>{setVisible(!visible)}} className="multi-input-label">Education: </label>
            {  
                cvData.education.length > 0 && visible && (
                    cvData.education.map((elem, index) => {
                        return (
                            <SingleEducationInput key={index} objIndex={index} eduObj={elem}/>
                        )
                    })
                ) 
            }
            {
                visible && <button key={0} className="add-btn material-icons md-36" onClick={()=> {addObj()}}>add</button>
            }
        </div>
    );
}





export default EducationInput;