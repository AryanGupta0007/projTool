import {createContext, useState, useContext} from 'react'
import {useNavigate} from 'react-router'
import {AuthContext} from './AuthContext.js'
export const FormContext = createContext()
export const FormState = (props) => {
    const navigate = useNavigate()
    const {userDetails} = useContext(AuthContext)
    const host = "http://127.0.0.1:3010/"
    const [formState, setFormState] = useState({})
    const [profileFormState, setProfileFormState] = useState({})
    const updateFormState = (name, value) => {
        const currentFormState = {...formState}
        formState[name] = value
        setFormState(currentFormState)
    }
    const updateProfileFormState = (name, value) => {
        const currentFormState = {...profileFormState}
        currentFormState[name] = value
        setProfileFormState(currentFormState)
    }
    const getUserProfile = async(role, userID, authToken) => {
        const response = await fetch(host+ `api/gen/${role}/profile/${userID}/`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                authToken: authToken
            }
        })
        const finalResponse = await response.json()
        const {name, industry, desc, logo, country, phoneNo, pinCode, email, city} = finalResponse.profile
        setProfileFormState({
            "org-name": name,
            "org-industry": industry,
            "org-about": desc,
            "org-country": country,
            "org-number": phoneNo,
            "org-pincode": pinCode,
            "org-email": email,
            "org-logo": logo,
            "org-city": city
            }
        )


    }
    const addOrganisationProfile = async(authToken) => {
        console.log("profile")
        const body = {
            "name": profileFormState["org-name"],
            "industry": profileFormState["org-industry"],
            "desc": profileFormState["org-about"],
            "logo": profileFormState["org-logo"],
            "country": profileFormState["org-country"],
            "phoneNo": profileFormState["org-number"],
            "pinCode": profileFormState["org-pincode"],
            "email": profileFormState["org-email"],
            "city": profileFormState["org-city"]
        }
        const response = await fetch(host + "api/org/profile/",{
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authToken: authToken
            },
            body: JSON.stringify(body)
        })
        const finalResponse = await response.json()
        console.log("post adding profile ", finalResponse)
    }

    const addProfesssionalProfile = async(authToken) => {
        console.log("profile")
        const body = {
            "name": profileFormState["pro-name"],
            "desc": profileFormState["pro-about"],
            "logo": profileFormState["pro-logo"],
            "country": profileFormState["pro-country"],
            "phoneNo": profileFormState["pro-number"],
            "pinCode": profileFormState["pro-pincode"],
            "email": profileFormState["pro-email"],
            "city": profileFormState["pro-city"]
        }
        const response = await fetch(host + "api/org/profile/",{
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authToken: authToken
            },
            body: JSON.stringify(body)
        })
        const finalResponse = await response.json()
        console.log("post adding profile ", finalResponse)
    }

    return <FormContext.Provider value={{formState, updateFormState, updateProfileFormState, addOrganisationProfile, profileFormState, getUserProfile}}>
        {props.children}
    </FormContext.Provider>
}