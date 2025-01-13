import {createContext, useState} from 'react'
import {useNavigate} from 'react-router'

export const AuthContext = createContext()
export const AuthState = (props) => {
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState({})
    const [registerState, setRegisterState] = useState({role: "organisation"})
    const [userDetails, setUserDetails] = useState(null)
    const host = "http://127.0.0.1:3010/"
    const updateLoginState = (name, value) => {
        const newLoginState = {...loginState}
        newLoginState[name] = value
        return setLoginState(newLoginState)
    }
    const updateRegisterState = (name, value) => {
        const newRegisterState = {...registerState}
        newRegisterState[name] = value
        return setRegisterState(newRegisterState)
    }

    const registerUser = async(registerState) => {
        console.log("registerState", registerState)
        const response = await fetch(host + "api/auth/register/",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(registerState)
        })
        const finalResponse = await response.json()
        console.log("finalResponse ", finalResponse)
        const authToken = finalResponse.authToken
        const user = finalResponse.user
        navigate('/signup')
        let {role} = registerState
        console.log("post register ", authToken, role)
        if (authToken !== null){
            role = role.toLowerCase()
            const userData = {user}
            const sessionData = ({"authToken": authToken, "role": role, "user": user})
            setUserDetails(sessionData)
            sessionStorage.setItem('session', JSON.stringify(sessionData));
            sessionStorage.setItem('userID', user._id);
            sessionStorage.setItem('userEmail', user.email);
            navigate(`${role}/profile/`)
    }}

    const loginUser = async(loginState) => {
        console.log("logging User ", loginState)
        const response = await fetch(host + "api/auth/login/", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(loginState)
        })
        const finalResponse = await response.json()
        const {authToken, user} = finalResponse
        navigate('/login/')
        const {role} = user
        if (authToken !== null){
            const sessionData = {"authToken": authToken, "role": role}
            const userData = {user}
            setUserDetails(sessionData)
            sessionStorage.setItem('session', JSON.stringify(sessionData));
            sessionStorage.setItem('userID', user._id);
            sessionStorage.setItem('userEmail', user.email);
            navigate(`${role}/dashboard/`)
        }
    }

    return <AuthContext.Provider value={{loginUser, registerUser, updateRegisterState, updateLoginState, userDetails, loginState, registerState, setUserDetails, navigate}}>
        {props.children}
    </AuthContext.Provider>
}