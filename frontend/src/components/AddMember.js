import React, {useContext} from "react";
import {FormContext} from '../contexts/FormContexts.js'
export const AddMember = () => {
    const {profileFormState, updateFormState, formState, addMember} = useContext(FormContext)
    const sessionData = JSON.parse(sessionStorage.getItem('session'))
    const {role, authToken} = sessionData
    console.log("RoleADd ", role)
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("hoello")
        addMember(authToken, profileFormState["org-id"])

    }
    const onChange = ((e) => {
        const {name, value} = e.target
        console.log("onChange project form  ", name, value)
        updateFormState(name, value)
    })
    if (role === "organisation" || role === "Organisation") {
        return (
            <>
                <div style={{width: "20vw", height: "30vh"}}
                     className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm  font-[sans-serif] overflow-hidden mx-auto mt-4">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold">
                            {"Add Member"}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            <form onSubmit={onSubmit}>
                                <div className="relative flex items-center">
                                    <input name="newMember-email" type="email" onChange={onChange}
                                           className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" required
                                           placeholder="Enter email" value={formState["newMember-email"]}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                                         className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                                                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                  data-original="#000000"></path>
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD
                                    </button>
                                </div>

                            </form>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}