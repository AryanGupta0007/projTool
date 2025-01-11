import {Sidebar} from './components/Sidebar.js';
import {Navbar} from './components/Navbar.js';
import './App.css'
import './components.css'
import './sections.css'
import './utils.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Content} from './sections/Content.js'
function App() {
    const customBlue = "#121e31"
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Navbar bg={customBlue}/>
                <Routes>
                    <Route path={"/login"} element={
                        <>
                            <Content load={"login"} />
                        </>
                    }></Route>
                    <Route path={"/signup"} element={
                        <>
                            <Content load={"signup"} />
                        </>
                    }></Route>
                    <Route path={"/org/dashboard"} element={
                        <>
                            <Content load={"org-dashboard"} />
                        </>
                    }/>
                    <Route path={"/org/projects"} element={
                        <>
                            <Content load={"org-projects"} />
                        </>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
