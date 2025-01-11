import {LoadComp} from '../components/LoadComp.js'
import {Login} from '../components/Login.js'
import {Signup} from '../components/Signup.js'
import {Dashboard} from './Dashboard.js'
import {ProjectsTable} from './ProjectsTable.js'
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