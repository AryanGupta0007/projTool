import {Login} from '../components/Login.js'
import {Signup} from '../components/Signup.js'
import {Dashboard} from './Dashboard.js'
import {ProjectsTable} from './ProjectsTable.js'
import {TasksTable} from './TasksTable.js'
import {ProfessionalProfileForm} from '../components/Form/ProfessionalProfileForm.js'
import {OrganisationProfileForm} from '../components/Form/OrganisationProfileForm.js'
export const Content = (props) => {
    const {load} = props
    const comp = (name) => {
        switch (name) {
            case "login":
                return <Login/>
            case "signup":
                return <Signup/>
            case "org-dashboard":
                return <Dashboard/>
            case "org-projects":
                return <ProjectsTable/>
            case "org-tasks":
                return <TasksTable/>
            case "profile-professional":
                return <ProfessionalProfileForm/>
            case "profile-organisation":
                return <OrganisationProfileForm/>
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