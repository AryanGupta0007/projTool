import {useEffect, useContext, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext.js'
import {GetContext} from '../contexts/GetContext.js'
import {FormContext} from '../contexts/FormContexts.js'

export const Sidebar = () => {
    const {navigate} = useContext(AuthContext)
    const {profileFormState, getUserProfile} = useContext(FormContext)
    const {
        getProfessionals,
        getProjects,
        getOrganisations,
        getMembers,
        professionals,
        members,
        tasks,
        projects,
        organisations
    } = useContext(GetContext)
    let sessionData = JSON.parse(sessionStorage.getItem('session'))
    const userID = sessionStorage.getItem('userID')
    const email = sessionStorage.getItem('userEmail')
    let role, authToken, id
    useEffect(() => {
        console.log("profilekrdiupdate", profileFormState)
    }, [profileFormState])

    if (userID !== null && sessionData !== null) {
        console.log("jhwerw", sessionData, userID)
        role = sessionData.role
        authToken = sessionData.authToken
        id = userID
    }

    const location = useLocation()
    useEffect(() => {
        console.log("pros", professionals)
    }, [professionals])
    useEffect(() => {
        console.log("projects", projects)
    }, [projects])
    useEffect(() => {
        console.log("members", members)
    }, [members])
    useEffect(() => {
        console.log("tasks", tasks)
    }, [tasks])
    useEffect(() => {
        console.log("orgs ", organisations)
    }, [organisations])
    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname !== "/login/" && location.pathname !== "/login" && location.pathname !== "/signup/" && location.pathname !== "/signup" && location.pathname !== "/") {
            try {

                while(sessionData.authToken === undefined){
                    console.log("getting session")
                    sessionData = JSON.parse(sessionStorage.getItem('session'))
                    console.log(sessionData)
                }
                getUserProfile(sessionData.role, userID, sessionData.authToken)
                getProfessionals(sessionData.authToken)
                let orgID
                if (role === "organisation" || role==="Organisation") {
                    orgID = profileFormState["org-id"]
                } else if (role === "professional" || role==="Professional" ) {
                    orgID = profileFormState["pro-organisation"]
                }
                console.log("calling from here members ",orgID)
                getMembers(sessionData.authToken, orgID)

                getProjects(sessionData.authToken, orgID)
                getOrganisations(sessionData.authToken)
            }
            catch(error){
                navigate('/login')
            }

        }
    }, [location.pathname])
    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname !== "/login/" && location.pathname !== "/login" && location.pathname !== "/signup/" && location.pathname !== "/signup" && location.pathname !== "/") {
            try {
                getUserProfile(sessionData.role, userID, sessionData.authToken)
                getProfessionals(sessionData.authToken)
                let orgID
                if (role === "organisation") {
                    orgID = profileFormState["org-id"]
                    console.log("rogID", orgID)
                } else if (role === "professional") {
                    orgID = profileFormState["pro-organisation"]
                }
                getMembers(sessionData.authToken, orgID)
                getProjects(sessionData.authToken, orgID)
                getOrganisations(sessionData.authToken)
            }
            catch(error){
                navigate('/login')
            }

        }
    }, [])
    const hideOrShow = () => {
        switch (location.pathname) {
            case "/login/" :
                return "hide"
            case "/login" :
                return "hide"
            case "/signup/":
                return "hide"
            case "/signup":
                return "hide"
            default:
                return "show"

        }
    }

    if (sessionData !== null) {
        return (
            <>
                <div className={hideOrShow()} style={{
                    position: "absolute",
                    left: 0,
                    height: "190vh",
                    width: "20vw",
                    backgroundColor: "white"
                }}>
                    <nav
                        className="h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] tracking-wide overflow-auto"
                        style={{backgroundColor: "white"}}>
                        <div className="flex flex-wrap items-center gap-4 cursor-pointer">
                            <img
                                src={profileFormState["org-logo"] || profileFormState["pro-logo"]} alt={"https://www.google.com/imgres?q=user&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FSample_User_Icon.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&docid=wEzPstpTgQ5VoM&tbnid=SBUlgl2FWFFpQM&vet=12ahUKEwic0oSCk_eKAxV8z6ACHbeHLjsQM3oECH8QAA..i&w=512&h=512&hcb=2&ved=2ahUKEwic0oSCk_eKAxV8z6ACHbeHLjsQM3oECH8QAA"}
                                className="w-10 h-10 rounded-full border-2 border-white"/>
                            <div>
                                <p className="txt-sm text-black">{profileFormState["org-name"] || profileFormState["pro-name"]}</p>
                                <p className="text-xs text-black-300 mt-0.5">{email}</p>
                            </div>
                        </div>

                        <hr className="my-6 border-gray-400"/>

                        <ul className="space-y-3">
                            <li>
                                <Link to={`/${role}/dashboard/`}
                                      className="text-black text-sm flex items-center hover:bg-white-700 rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         className="w-[18px] h-[18px] mr-4"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                                            data-original="#000000"/>
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/organisation/team/`}
                                      className="text-black text-sm flex items-center hover:bg-white-700 rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         className="w-[18px] h-[18px] mr-4"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M122.39 165.78h244.87c10.49 0 19-8.51 19-19s-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19zm164.33 99.44c0-10.49-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19h145.33c10.49 0 19-8.51 19-19z"
                                            data-original="#000000"/>
                                        <path
                                            d="M486.63 323.71c2.04-22.33 3.41-48.35 3.44-78.68-.06-57.07-4.85-98.86-9.96-129.57-8.94-50.6-54.9-96.56-105.5-105.5C343.9 4.85 302.11.06 245.03 0c-57.07.06-98.87 4.85-129.58 9.96C64.86 18.9 18.9 64.86 9.96 115.46 4.85 146.17.07 187.96 0 245.03c.07 57.07 4.85 98.87 9.96 129.58 8.94 50.6 54.9 96.56 105.5 105.5 30.71 5.11 72.5 9.89 129.58 9.96 30.32-.03 56.34-1.4 78.66-3.44 19.84 15.87 45 25.37 72.38 25.37 64.02 0 115.93-51.9 115.93-115.92 0-27.38-9.5-52.54-25.37-72.37zM245.04 452.07c-45.02-.05-85.3-3.13-123.13-9.41-16.81-3.01-33.84-12.44-47.95-26.55s-23.53-31.13-26.55-47.95c-6.28-37.79-9.35-78.07-9.41-123.13.05-45.04 3.13-85.32 9.41-123.13 3.01-16.81 12.44-33.83 26.55-47.94s31.13-23.53 47.95-26.55C159.72 41.13 200 38.06 245.04 38c45.02.05 85.3 3.13 123.13 9.41 16.81 3.01 33.83 12.44 47.95 26.55 14.11 14.11 23.53 31.13 26.55 47.95 6.28 37.83 9.35 78.1 9.41 123.13-.02 16.9-.48 33.11-1.36 48.79-16.28-8.72-34.88-13.66-54.64-13.66-64.02 0-115.93 51.9-115.93 115.92 0 19.76 4.95 38.35 13.66 54.63-15.68.88-31.89 1.34-48.78 1.35zM396.08 474c-42.97 0-77.93-34.95-77.93-77.92s34.96-77.92 77.93-77.92 77.93 34.95 77.93 77.92S439.05 474 396.08 474z"
                                            data-original="#000000"/>
                                        <path
                                            d="M406.28 418.24c-2.42-.4-5.71-.78-10.2-.78s-7.78.38-10.2.78c-3.98.7-7.6 4.32-8.31 8.31-.4 2.42-.78 5.71-.78 10.2s.38 7.78.78 10.2c.7 3.98 4.32 7.6 8.31 8.31 2.42.4 5.71.78 10.2.78s7.78-.38 10.2-.78c3.98-.7 7.6-4.32 8.31-8.31.4-2.42.78-5.71.78-10.2s-.38-7.78-.78-10.2c-.7-3.98-4.32-7.6-8.31-8.31zm-10.21-12.61c10.49 0 19-8.51 19-19v-31.7c0-10.49-8.51-19-19-19s-19 8.51-19 19v31.7c0 10.49 8.51 19 19 19z"
                                            data-original="#000000"/>
                                    </svg>
                                    <span>Our Team</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/organisation/projects/`}
                                      className="text-black text-sm flex items-center hover:bg-white-700 rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         className="w-[18px] h-[18px] mr-4"
                                         viewBox="0 0 511.414 511.414">
                                        <path
                                            d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z"
                                            data-original="#000000"/>
                                    </svg>
                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/discussion/`}
                                      className="text-black text-sm flex items-center hover:bg-white-700 rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke='currentColor'
                                         className="w-[18px] h-[18px] mr-4"
                                         viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"/>
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                                                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                  data-original="#000000"/>
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000"/>
                                        </g>
                                    </svg>
                                    <span>Discussion</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${role}/${id}/profile/`}
                                      className="text-black text-sm flex items-center hover:bg-white-700 rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         className="w-[18px] h-[18px] mr-4"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                            data-original="#000000"/>
                                    </svg>
                                    <span>Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>
        )
    }
}

