import {createContext, useState, useContext} from 'react'
import {AuthContext} from './AuthContext.js'

export const GetContext = createContext()
export const GetState = (props) => {
    const [organisations, setOrganisations] = useState([])
    const [professionalDetail, setProfessionalDetail] = useState({})
    const [organisationDetail, setOrganisationDetail] = useState({})
    const [taskDetail, setTaskDetail] = useState({})
    const [projectDetail, setProjectDetail] = useState({})
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])
    const [members, setMembers] = useState([])
    const [professionals, setProfessionals] = useState([])
    const host = "http://localhost:3010/"
    const getOrganisations = async (authToken) => {

        const response = await fetch(host + "api/gen/organisations/all/", {
            method: "GET", headers: {
                authToken, "content-Type": "application/json"
            }
        })
        const finalResponse = await response.json()
        setOrganisations(finalResponse.organisations)
    }
    const getProjects = async (authToken, orgID) => {

        const response = await fetch(host + `api/gen/projects/all/${orgID}/`, {
            method: "GET", headers: {
                authToken, "content-Type": "application/json"
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.projects !== undefined) {
            setProjects(finalResponse.projects)
        }
    }
    const getTasks = async (authToken, projID) => {
        const response = await fetch(host + `api/gen/tasks/all/${projID}/`, {
            method: "GET", headers: {
                authToken, "content-Type": "application/json"
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.tasks !== undefined) {
            setTasks(finalResponse.tasks)
        }
    }
    const getMembers = async (authToken, orgID) => {

        const response = await fetch(host + `api/gen/members/all/${orgID}/`, {
            method: "GET", headers: {
                authToken, "content-Type": "application/json"
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.members !== undefined) {
            setMembers(finalResponse.members)
        }
    }
    const getProfessionalDetails = async (authToken, userID) => {
        // userID is professionalID
        const response = await fetch(host + `api/gen/${userID}/`, {
            method: "GET", headers: {
                "content-Type": "application/json",
                authToken
            }
        })
        const finalResponse = await response.json()
        console.log("professionalDetail ", finalResponse)
        if (finalResponse.profile !== undefined) {

            setProfessionalDetail(finalResponse.profile)
        }
    }
    const getOrganisationDetails = async (authToken, orgID) => {
        const response = fetch(host + `api/gen/${orgID}/`, {
            method: "GET", headers: {
                "content-Type": "application/json",
                authToken
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.organisation !== undefined) {
            setOrganisationDetail(finalResponse.organisation)
        }
    }
    const getTaskDetails = async (authToken, taskID) => {
        const response = fetch(host + `api/gen/${taskID}/`, {
            method: "GET", headers: {
                "content-Type": "application/json",
                authToken
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.task !== undefined) {
            setTaskDetail(finalResponse.task)
        }
    }
    const getProjectDetails = async (authToken, projectID) => {
        const response = fetch(host + `api/gen/${projectID}/`, {
            method: "GET", headers: {
                "content-Type": "application/json",
                authToken
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.project !== undefined) {
            setProjectDetail(finalResponse.project)
        }
    }
    const getProfessionals = async (authToken) => {
        const response = await fetch(host + "api/gen/professionals/all/", {
            method: "GET", headers: {
                authToken: authToken, "content-Type": "application/json"
            }
        })
        const finalResponse = await response.json()
        if (finalResponse.professionals !== undefined) {
            setProfessionals(finalResponse.professionals)
        }
    }

    return <GetContext.Provider value={{
        getProjects,
        getTasks,
        getOrganisations,
        getMembers,
        getProfessionals,
        getProjectDetails,
        getTaskDetails,
        getProfessionalDetails,
        getOrganisationDetails,
        projects,
        members,
        tasks,
        professionals,
        organisations,
        professionalDetail,
        organisationDetail,
        taskDetail,
        projectDetail
    }}>
        {props.children}
    </GetContext.Provider>
}