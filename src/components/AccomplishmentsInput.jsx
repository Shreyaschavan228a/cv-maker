import { useState , useRef} from "react";
import {v4 as uuidv4} from "uuid";

const AccomplishmentsInput = (props) => {
    const {accomplishmentsObj, objIndex, cvData, setCvData, visibleAccomplishments, setVisibleAccomplishments} = props;

    const modifyAccomplishments = (accomplishmentIndex, fieldRef) => {
        let oldCvData = structuredClone(cvData);
        oldCvData.experience[objIndex].accomplishments[accomplishmentIndex] = fieldRef.current.value;
        setCvData(oldCvData);
    }

    const removeAccomplishment = (accomplishmentIndex) => {
        let oldCvData = structuredClone(cvData);
        oldCvData.experience[objIndex].accomplishments.splice(accomplishmentIndex, 1);
        setCvData(oldCvData);
    }

    const addAccomplishment = () => {
        let oldCvData = structuredClone(cvData);
        oldCvData.experience[objIndex].accomplishments.push("");
        setCvData(oldCvData);
    }

    const SingleAccomplishmentsInput = (props) => {
        const {accomplishmentIndex, singleAccomplishmentObj} = props;
        //eslint-disable-next-line
        const [id, setId] = useState(uuidv4());
        const accomplishment = useRef(null);

        return (
            <div className="single-accomplishments-input">
                <label htmlFor={"qualification-title-"+id}>{accomplishmentIndex + 1}. </label>
                <input id={"qualification-title-"+id} defaultValue={singleAccomplishmentObj} onBlur={() =>{modifyAccomplishments(accomplishmentIndex, accomplishment);}} ref={accomplishment}/>
                <div className="remove-btn-container"><button className="material-icons remove-btn" onClick={()=>{removeAccomplishment(accomplishmentIndex)}}>delete</button></div>
            </div>
        )
    }

    //https://boards.4chan.org/gif/thread/22743041
    //kxobby
    return (
        <div className="multi-input-container accomplishments-input">
            <label onClick={()=>setVisibleAccomplishments(!visibleAccomplishments)} className="multi-input-label">Accomplishments: </label>
            {
                accomplishmentsObj.length > 0 && visibleAccomplishments && (
                    accomplishmentsObj.map((elem, index)=>{
                        return (
                            <SingleAccomplishmentsInput accomplishmentIndex={index} key={index} singleAccomplishmentObj={elem}/>
                        )
                    })
                )
            }
            {
                visibleAccomplishments && (
                    <button key={0} className="add-btn material-icons md-36" onClick={()=>{addAccomplishment()}}>add</button>
                )
            }
        </div>
    )

}

export default AccomplishmentsInput;