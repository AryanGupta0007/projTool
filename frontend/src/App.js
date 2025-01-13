import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import './components.css'
import './sections.css'
import './utils.css'
import {Sidebar} from './components/Sidebar.js';
import {Navbar} from './components/Navbar.js';
import {Login} from './components/Login.js'
import {Signup} from './components/Signup.js'
import {AuthState} from './contexts/AuthContext.js'
import {FormState} from './contexts/FormContexts.js'
import {Content} from './sections/Content.js'

function App() {
    const customBlue = "#121e31"
    return (
        <div className="App">
            <Router>
                <AuthState>
                    <FormState>
                        <Sidebar/>
                        <Navbar bg={customBlue}/>
                        <Routes>
                            <Route path={"/login"} element={
                                <>
                                    <Login/>
                                </>
                            }></Route>
                            <Route path={"/signup"} element={
                                <>
                                    <Signup/>
                                </>
                            }></Route>
                            <Route path={"organisation/dashboard"} element={
                                <>
                                    <Content load={"org-dashboard"}/>
                                </>
                            }/>
                            <Route path={"organisation/projects"} element={
                                <>
                                    <Content load={"org-projects"}/>
                                </>
                            }/>
                            <Route path={"organisation/tasks"} element={
                                <>
                                    <Content load={"org-tasks"}/>
                                </>
                            }/>
                            <Route path={"professional/profile/"} element={
                                <>
                                    <Content load={"profile-professional"}/>
                                </>
                            }/>
                            <Route path={"organisation/profile/"} element={
                                <>
                                    <Content load={"profile-organisation"}/>
                                </>
                            }/>
                            <Route path={"organisation/project/create" } element={
                                <>
                                    <Content load={"project-form"}/>
                                </>
                            }/>
                            <Route path={"organisation/:profileID/profile/" } element={
                                <>
                                    <Content load={"profile-organisation"}/>
                                </>
                            }/>
                            <Route path={"organisation/task/create"} element={
                                <>
                                    <Content load={"task-form"}/>
                                </>
                            }/>
                        </Routes>
                    </FormState>
                </AuthState>
            </Router>
        </div>

    );
}

export default App;
