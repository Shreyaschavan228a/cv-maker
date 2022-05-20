const Seperator = ({thick, elemId}) => {
    if(thick){
        return <div className="seperator thick" key={elemId}></div>
    }
    else{
        return <div className="seperator thin" key={elemId}></div>
    }
}

export default Seperator;