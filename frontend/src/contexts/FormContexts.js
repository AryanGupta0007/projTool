import {createContext, useState, useContext} from 'react'
import {useNavigate} from 'react-router'
import {AuthContext} from './AuthContext.js'
import {GetContext} from './GetContext.js'
export const FormContext = createContext()
export const FormState = (props) => {
    const navigate = useNavigate()
    const {getMembers} = useContext(GetContext)
    const {userDetails} = useContext(AuthContext)
    const host = "http://127.0.0.1:3010/"
    const [formState, setFormState] = useState({})
    const [profileFormState, setProfileFormState] = useState({
        "org-country": "INDIA", "org-industry": "Textile"
    })
    const updateFormState = (name, value) => {
        const currentFormState = {...formState}
        currentFormState[name] = value
        setFormState(currentFormState)
    }
    const clearForm = () => {
        const newState = {}
        setFormState(newState)
    }
    const updateProfileFormState = (name, value) => {
        const currentFormState = {...profileFormState}
        currentFormState[name] = value
        setProfileFormState(currentFormState)
    }
    const getUserProfile = async (userRole, userID, authToken) => {
        try {
            const response = await fetch(host + `api/gen/${userRole}/profile/${userID}/`, {
                method: "GET",
                headers: {
                    "content-Type": "application/json",
                    authToken
                }
            })
            const finalResponse = await response.json()
            console.log("user profile fethced ", finalResponse)
            if (finalResponse.status !== 404) {
                const {profile} = finalResponse
                const {
                    id,
                    name,
                    industry,
                    desc,
                    profilePic,
                    role,
                    country,
                    phoneNo,
                    pinCode,
                    email,
                    city,
                    address,
                    organisation
                } = profile
                let slug
                if (userRole.toLowerCase() === "professional") {
                    slug = "pro"
                } else if (userRole.toLowerCase() === "organisation") {
                    slug = "org"
                    console.log(
                        "dests", name, id, industry, desc
                    )
                }
                setProfileFormState({
                    [`${slug}-name`]: name,
                    [`${slug}-id`]: id,
                    [`${slug}-industry`]: industry,
                    [`${slug}-about`]: desc,
                    [`${slug}-country`]: country,
                    [`${slug}-number`]: phoneNo,
                    [`${slug}-pincode`]: pinCode,
                    [`${slug}-email`]: email,
                    [`${slug}-logo`]: profilePic,
                    [`${slug}-city`]: city,
                    [`${slug}-role`]: role,
                    [`${slug}-address`]: address,
                    [`${slug}-organisation`]: organisation
                });

            }
        } catch (error) {
            console.log("error occurred fetching profile ", error)
        }


    }
    const addOrganisationProfile = async (authToken) => {
        console.log("adding profile")
        const userEmail = sessionStorage.getItem('userEmail')
        const body = {
            "name": profileFormState["org-name"],
            "industry": profileFormState["org-industry"],
            "address": profileFormState["org-address"],
            "about": profileFormState["org-about"],
            "logo": profileFormState["org-logo"],
            "country": profileFormState["org-country"],
            "phoneNo": profileFormState["org-number"],
            "pinCode": profileFormState["org-pincode"],
            "email": userEmail,
            "city": profileFormState["org-city"]
        }
        console.log("body ", body)
        const response = await fetch(host + "api/org/profile/", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authToken: authToken
            },
            body: JSON.stringify(body)
        })
        const finalResponse = await response.json()
        console.log("post adding profile ", finalResponse)
        navigate('/organisation/dashboard/')
    }

    const addProfessionalProfile = async (authToken) => {
        console.log("profile")
        const userID = sessionStorage.getItem('userID')
        const body = {
            "userID": userID,
            "role": profileFormState["pro-role"],
            "name": profileFormState["pro-name"],
            "desc": profileFormState["pro-about"],
            "profilePic": profileFormState["pro-logo"],
            "country": profileFormState["pro-country"],
            "phoneNo": profileFormState["pro-number"],
            "pinCode": profileFormState["pro-pincode"],
            "email": profileFormState["pro-email"],
            "city": profileFormState["pro-city"],
            "address": profileFormState["pro-address"]
        }
        const response = await fetch(host + "api/pro/profile/", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authToken
            },
            body: JSON.stringify(body)
        })
        const finalResponse = await response.json()
        navigate('/professional/dashboard/')
        console.log("post adding profile ", finalResponse)
    }
    const addProject = async (authToken) => {
        const body = {
            "name": formState["project-name"],
            "startDate": formState["project-startDate"],
            "endDate": formState["project-endDate"],
            "manager": formState["project-manager"],
            "about": formState["project-about"]
        }
        console.log("bodu", body)
        const response = await fetch(
            host + "api/org/project/", {
                method: "POST",
                headers: {
                    "content-Type": 'application/json',
                    authToken
                },
                body: JSON.stringify(body)
            }
        )
        const finalResponse = await response.json()
        clearForm()
        navigate('/organisation/projects/')
        console.log("fsfs", finalResponse)
    }
    const addTask = async (authToken, projectID) => {
        const body = {
            "project": projectID,
            "name": formState["task-name"],
            "start": formState["task-startDate"],
            "due": formState["task-endDate"],
            "assignedTo": formState["task-manager"],
            "desc": formState["task-about"]
        }
        console.log("bodu", body)
        const response = await fetch(
            host + `api/admin/${projectID}/tasks/create/`, {
                method: "POST",
                headers: {
                    "content-Type": 'application/json',
                    authToken
                },
                body: JSON.stringify(body)
            }
        )
        const finalResponse = await response.json()
        clearForm()
        navigate(`/${projectID}/tasks/`)
        console.log("fsfs", finalResponse)
    }
    const addMember = async (authToken, orgID) => {
        const requestBody = {
            inviteeEmail: formState["newMember-email"],
            organisationID: orgID
        }
        const response = await fetch(
            host + "api/org/addMember/", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    authToken
                },
                body: JSON.stringify(requestBody)
            }
        )
        const finalResponse = await response.json()
        getMembers(authToken, orgID)
        clearForm()
        console.log("After adding new member ", finalResponse)
    }
    return <FormContext.Provider value={{
        addProfessionalProfile,
        formState,
        updateFormState,
        updateProfileFormState,
        addOrganisationProfile,
        profileFormState,
        getUserProfile,
        addProject,
        addTask,
        addMember
    }}>
        {props.children}
    </FormContext.Provider>
}