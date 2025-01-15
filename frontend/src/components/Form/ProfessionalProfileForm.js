import {useContext, useEffect} from 'react'
import {FormContext} from '../../contexts/FormContexts.js'

export const ProfessionalProfileForm = (props) => {
    const {profileFormState, addOrganisationProfile, addProfessionalProfile, updateProfileFormState, getUserProfile} = useContext(FormContext)
    const sessionData = JSON.parse(sessionStorage.getItem('session'))
    const userID = sessionStorage.getItem('userID')
    const userEmail = sessionStorage.getItem('userEmail')
    const role = sessionData.role
    const onSubmit = ((e) => {
        e.preventDefault()
        addProfessionalProfile(sessionData.authToken)
    })
    const onChange = ((e) => {
        const {name, value} = e.target
        console.log("onChange profile form  ", name, value)
        updateProfileFormState(name, value)
    })
    useEffect(() => {
        getUserProfile(role, userID)
    })
    useEffect(() => {
        console.log("updated profile pro ", profileFormState)
    }, [profileFormState])
    return (
        <>

            <div className={"pro-profile-form"}
                 style={{position: "relative", bottom: "12vh"}}>
                <form onSubmit={onSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so
                                be careful what you share.</p>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">

                                    <div className="mt-2">
                                        <label htmlFor="full-name"
                                               className="block text-sm/6 font-medium text-gray-900">Professional
                                            logo URL</label>
                                        <input type="text" name="pro-logo" id="street-address"
                                               autoComplete="street-address"
                                               onChange={onChange} value={profileFormState["pro-logo"]}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">Full
                                        name</label>
                                    <div className="mt-2">
                                        <input type="text" onChange={onChange}
                                               value={profileFormState["pro-name"]}
                                               name="pro-name" id="full-name" autoComplete="given-name" required
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>


                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email
                                        address</label>
                                    <div className="mt-2">
                                        <input id="email" name="pro-email" type="email" onChange={onChange}
                                               value={userEmail} autoComplete="email" disabled
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="about"
                                           className="block text-sm/6 font-medium text-gray-900">About</label>
                                    <div className="mt-2">
                                    <textarea name="pro-about" id="about" rows="3" onChange={onChange}
                                              value={profileFormState["pro-about"]} required
                                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about you.</p>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="country"
                                           className="block text-sm/6 font-medium text-gray-900">Country</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select id="country" name="pro-country" autoComplete="country-name"
                                                onChange={onChange} value={profileFormState["pro-country"]}
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                        <svg
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fillRule="evenodd"
                                                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm/6 font-medium text-gray-900">Your address</label>
                                    <div className="mt-2">
                                        <input type="text" name="pro-address" id="street-address"
                                               autoComplete="street-address" onChange={onChange}
                                               value={profileFormState["pro-address"]}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city"
                                           className="block text-sm/6 font-medium text-gray-900">Role</label>
                                    <div className="mt-2">
                                        <input type="text" name="pro-role" id="role" autoComplete="address-level2"
                                               onChange={onChange} value={profileFormState["pro-role"]}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">Phone
                                        number</label>
                                    <div className="mt-2">
                                        <input type="text" name="pro-number" id="phone-number"
                                               autoComplete="phone-number" onChange={onChange}
                                               value={profileFormState["pro-number"]}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                               required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}