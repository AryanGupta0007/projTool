import {Sidebar} from './components/Sidebar.js';
import {Navbar} from './components/Navbar.js';
import './App.css'
import './components.css'
import './sections.css'
import './utils.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Dashboard} from './sections/Dashboard.js'
import {Projects} from './sections/Projects.js'
function App() {
    const customBlue = "#121e31"
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Navbar bg={customBlue}/>
                <Routes>
                    <Route path={"/org/dashboard"} element={
                        <>
                            <Dashboard />
                        </>
                    }/>
                    <Route path={"/org/projects"} element={
                        <>
                            <Projects />
                        </>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
