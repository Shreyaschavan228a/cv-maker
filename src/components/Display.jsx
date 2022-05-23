import image from "../assets/placeholder_image.png";
import GitHubMark from "../assets/GitHub-Mark-32px.png";
import Seperator from "./Seperator";
import EducationDiv from "./EducationDiv";
import ExperienceDiv from "./ExperienceDiv";
import QualificationsDiv from "./QualificationsDiv";

const Display = (props) => {
    const {cvData} = props;
    const getUsername = (githubProfile) =>{
        const profileURL = new URL(githubProfile);
        return profileURL.pathname.slice(1);
    }

    return (
        <div className="display">
            <div className="display-main-container">
                <div className="personal-info">
                    <div>
                        <Seperator thick />
                        <h1 className="first-name name">{cvData.firstName}</h1>
                        <h1 className="last-name name">{cvData.lastName}</h1>
                        <div className="contact-details">
                            <h3 className="email">{cvData.email}</h3>
                            <h3 className="contact"><b>Phone:</b> {cvData.contact}</h3>
                        </div>
                        <Seperator thick  />
                    </div>
                    <img alt="placeholder-for-cv" src={cvData.imgUrl !== "" ? cvData.imgUrl : image} className="placeholder-image" />
                </div>
                <Seperator />
                <div className="edu-level-container">
                    <h1>Education </h1>
                    {
                        cvData.education?.map((elem, index)=>{
                            return <EducationDiv key={index} title={elem.title} description={elem.description} timeRange={elem.timeRange} />
                        })
                    }
                </div>
                <Seperator />
                <div className="experience-div-container">
                    <h1>Work Experience </h1>
                    {
                        cvData.experience?.map((elem, index) => {
                            return <ExperienceDiv key={index} title={elem.title} description={elem.description} timeRange={elem.timeRange} accomplishments={elem.accomplishments}/>
                        })
                    }
                </div>
                <Seperator />
                <div className="qualifications-div-container">
                    <h1>Qualifications </h1>
                    {
                        cvData.qualifications.length > 0 && (
                            <QualificationsDiv qualifications={cvData.qualifications} key={0}/>
                        )
                    }
                </div>
                <Seperator />
                <div className="github-container">
                    <h3>
                        <img src={GitHubMark} alt="GitHub-Logo" id="github-mark"/>
                        GitHub: <a href={cvData.github} id="github-link">
                            {getUsername(cvData.github)}
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Display;
