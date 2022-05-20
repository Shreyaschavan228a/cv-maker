const QualificationsDiv = (props) => {
    const {qualifications} = props;
    return (
        <div className="display-div">
            {
                qualifications.length > 0 && (
                    <ul>
                    {qualifications.map((elem, index)=>{
                       return <li key={index}>{elem}</li>
                    })}
                    </ul>
                )
            }
        </div>
    );
}

export default QualificationsDiv;