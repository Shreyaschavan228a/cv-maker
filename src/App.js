import "./styles/global.css";
import Display from "./components/Display";
import Inputs from "./components/Inputs";
import Header from "./components/Header";


function App() {
    return (
        <div className="app">
            <Header />
            <div className="main-container">
                <Inputs />
                <Display />
            </div>
        </div>
    );
}

export default App;
