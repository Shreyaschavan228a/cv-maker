
const ExperienceDiv = (props) => {
    const {title, timeRange, description, accomplishments} = props;

    return (
        <div className="display-div">
            <div className="display-div-title">
                <h2>{title}</h2>
                <p>{timeRange}</p>
            </div>
            <p>{description}</p>
            {accomplishments.length > 0 && (
                <ul>
                    {accomplishments.map((elem, index)=>{
                        return <li key={index}>{elem}</li>
                    })}
                </ul>
            )}
        </div>
    );
}

export default ExperienceDiv;