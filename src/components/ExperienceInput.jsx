import { useState , useRef} from "react";
import {v4 as uuidv4} from "uuid";
import AccomplishmentsInput from "./AccomplishmentsInput";

const ExperienceInput = (props) => {
    const {cvData, setCvData} = props;
    const [visible, setVisible] = useState(false);
    const [visibleAccomplishments, setVisibleAccomplishments] = useState(false);
    
    const SingleExperieceInput = (props) => {
        const {objIndex, experienceObj} = props;

        //eslint-disable-next-line
        const [id, setId] = useState(uuidv4());
        const title = useRef(null);
        const description = useRef(null);
        const timeRange = useRef(null);

        const modifyObj = (fieldName, fieldRef) => {
            let oldCvData = structuredClone(cvData);
            oldCvData.experience[objIndex][fieldName] = fieldRef.current.value;
            setCvData(oldCvData);
        }

        

        

        return (
            <div className="input-container single-input-container single-experience-input">
                <div className="input-container">
                    <label htmlFor={"experience-title-"+id}>Title: </label>
                    <input type="text" id={"experience-title-"+id} defaultValue={experienceObj.title} ref={title} onBlur={()=>{modifyObj("title", title)}}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor={"experience-description-"+id}>Description: </label>
                    <input type="text" id={"experience-description-"+id} defaultValue={experienceObj.description} ref={description} onBlur={()=>{modifyObj("description", description)}}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor={"experience-timeRange-"+id}>Time Range: </label>
                    <input type="text" id={"experience-timeRange-"+id} defaultValue={experienceObj.timeRange} ref={timeRange} onBlur={()=>{modifyObj("timeRange", timeRange)}}/>
                </div>

                <AccomplishmentsInput accomplishmentsObj={cvData.experience[objIndex].accomplishments} objIndex={objIndex} cvData={cvData} setCvData={setCvData} visibleAccomplishments={visibleAccomplishments} setVisibleAccomplishments={setVisibleAccomplishments}/>

                <div className="remove-btn-container">
                    <button className="remove-btn material-icons md-36" onClick={()=>{removeObj(objIndex)}}>delete</button>
                </div>
            </div>
        )
    }

    const addObj = () => {
        let oldCvData = structuredClone(cvData);
        oldCvData.experience.push({"title": "", "description": "", "timeRange": "", "accomplishments": []});
        setCvData(oldCvData);
    }

    const removeObj = (objIndex) => {
        let oldCvData = structuredClone(cvData);
        oldCvData.experience.splice(objIndex,1);
        setCvData(oldCvData);
    }
    
    return (
        <div className="experience-input multi-input-container">
            <label onClick={()=>{setVisible(!visible)}} className="multi-input-label">Work Experience: </label>
            {
                cvData.experience.length > 0 && visible && (
                    cvData.experience.map((elem, index) => {
                        return <SingleExperieceInput key={index} objIndex={index} experienceObj={elem} />
                    })
                )
            }
            {
                visible && <button key={0} className="add-btn material-icons md-36" onClick={()=> {addObj()}}>add</button>
            }
        </div>
    );
}

export default ExperienceInput;