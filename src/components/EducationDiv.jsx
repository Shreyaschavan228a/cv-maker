const EducationDiv = (props) => {
    const {title, description, timeRange} = props;

    return (
        <div className="display-div">
            <div className="display-div-title">
                <h2>{title}</h2>
                <p>{timeRange}</p>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default EducationDiv;