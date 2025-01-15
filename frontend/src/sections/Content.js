import {useEffect, useContext} from 'react'
import {Login} from '../components/Login.js'
import {Signup} from '../components/Signup.js'
import {OurTeam} from '../components/OurTeam.js'
import {Dashboard} from './Dashboard.js'
import {ProjectsTable} from './ProjectsTable.js'
import {TasksTable} from './TasksTable.js'
import {ProjectForm} from '../components/Form/ProjectForm.js'
import {TaskForm} from '../components/Form/TaskForm.js'
import {ProfessionalProfileForm} from '../components/Form/ProfessionalProfileForm.js'
import {OrganisationProfileForm} from '../components/Form/OrganisationProfileForm.js'
import {AuthContext} from '../contexts/AuthContext.js'
export const Content = (props) => {
    const {userDetails} = useContext(AuthContext)
    useEffect(()=>{
        console.log("userDetails ", userDetails)
    }, [userDetails])
    const {load} = props
    const comp = (name) => {
        switch (name) {
            case "login":
                return <Login/>
            case "signup":
                return <Signup/>
            case "org-dashboard":
                return <Dashboard/>
            case "pro-dashboard":
                return <Dashboard/>
            case "org-projects":
                return <ProjectsTable/>
            case "project-tasks":
                return <TasksTable/>
            case "our-team":
                return <OurTeam/>
            case "profile-professional":
                return <ProfessionalProfileForm/>
            case "profile-organisation":
                return <OrganisationProfileForm/>
            case "project-form":
                return <ProjectForm/>
            case "task-form":
                return <TaskForm/>
            default:
                return <h1>404</h1>
        }

    }
    return (
        <div className="content" >
            {comp(load)}
        </div>
    )
}