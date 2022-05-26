import "./styles/global.css";
import Display from "./components/Display";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import { useState } from "react";

function App() {
    const [cvData, setCvData] = useState(testData);
    return (
        <div className="app">
            <Header />
            <div className="main-container">
                <Inputs setCvData={setCvData} cvData={cvData}/>
                <Display cvData={cvData}/>
            </div>
        </div>
    );
}

const testData = {
    "firstName": "Phasellus",
    "lastName": "Maecenas",
    "education": [
        {
            "title": "consectetur adipiscing elit.",
            "description": "Aliquam sagittis et orci sed congue. Suspendisse non urna vel felis luctus tristique ut sit amet elit.",
            "timeRange": "1996-2000"
        },
        {
            "title": "Nunc efficitur mi eu.",
            "description": "Mauris vitae hendrerit ligula. Donec molestie mauris at quam dignissim tincidunt. Pellentesque habitant.",
            "timeRange": "1996-2010"
        },
        {
            "title": "Etiam eu augue.",
            "description": "Nulla sit amet dolor non est tempus tincidunt. Morbi diam tortor, dignissim sit.",
            "timeRange": "1996-2020"
        }
    ],
    "imgUrl": "",
    "email": "acacnac@iapd.com",
    "contact": "+912377418416",
    "experience": [
        {
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "timeRange": "2000-2010",
            "description": " Integer ut",
            "accomplishments": [
                "Nulla quis sollicitudin tellus. Donec eros dui.",
                "Nullam nec aliquam dolor. Curabitur eget est."
            ]
        }
    ],
    "qualifications" : [
        "Quisque scelerisque auctor lacus.",
        "Aenean vel lectus et.",
        "Nunc efficitur mi eu."
    ],
    "github": "https://github.com/Phasellus"
}

export default App;
