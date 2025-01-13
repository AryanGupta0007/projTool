import {useContext, useEffect} from 'react'
import {FormContext} from '../../contexts/FormContexts.js'
export const OrganisationProfileForm = (props) => {
    const {profileFormState, updateProfileFormState} = useContext(FormContext)
    const userEmail = sessionStorage.getItem('userEmail')
    const onChange = ((e) => {
        const {name, value} = e.target
        console.log("onChange profile form  ", name, value)
        updateProfileFormState(name, value)
    })
    useEffect(()=>{
        console.log("updatedPRofile", profileFormState)
    }, [profileFormState])
    return (
        <>
            <div className={"pro-profile-form"}
                 style={{position: "relative", bottom: "12vh"}}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so
                            be careful what you share.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">

                                <div className="mt-2">
                                    <label htmlFor="org-name" className="block text-sm/6 font-medium text-gray-900">Organisation
                                        logo URL</label>
                                    <input type="text" name="org-logo" id="org-name" onChange={onChange}
                                           autoComplete="org-name" value={profileFormState["org-logo"]} required
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">Organisation
                                    name</label>
                                <div className="mt-2">
                                    <input type="text" name="org-name" id="full-name" onChange={onChange} autoComplete="given-name" value={profileFormState["org-name"]} required
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="industry"
                                       className="block text-sm/6 font-medium text-gray-900">Industry</label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select id="industry" name="org-industry" autoComplete="industry-name" onChange={onChange} value={profileFormState["org-industry"]} required
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <option>Textile</option>
                                        <option>Student</option>
                                        <option>Software</option>
                                        <option>Food</option>
                                        <option>Manufacturing</option>

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


                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email
                                    address</label>
                                <div className="mt-2">
                                    <input id="email" name="org-email" type="email" onChange={onChange} autoComplete="email" value={userEmail} disabled
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about"
                                       className="block text-sm/6 font-medium text-gray-900">About</label>
                                <div className="mt-2">
                                    <textarea name="org-about" id="about" rows="3" onChange={onChange} value={profileFormState["org-about"]} required
                                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                </div>
                                <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about your
                                    organisation.</p>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address"
                                       className="block text-sm/6 font-medium text-gray-900">Your address</label>
                                <div className="mt-2">
                                    <input type="text" name="org-address" id="street-address" onChange={onChange} value={profileFormState["org-address"]}
                                           autoComplete="street-address" required
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country"
                                       className="block text-sm/6 font-medium text-gray-900">Country</label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select id="industry" name="org-country" autoComplete="industry-name" onChange={onChange} value={profileFormState["org-country"]} required
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        {<option>INDIA</option>}
                                        {<option>USA</option>}
                                        {<option>CANADA</option>}
                                        {<option>UAE</option>}

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


                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">Phone
                                    number</label>
                                <div className="mt-2">
                                    <input type="text" name="org-number" id="phone-number"
                                           autoComplete="phone-number" onChange={onChange} value={profileFormState["org-number"]} required
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                           required/>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP /
                                    Postal
                                    code</label>
                                <div className="mt-2">
                                    <input type="text" name="org-pincode" onChange={onChange} id="postal-code" required autoComplete="postal-code" value={profileFormState["org-pincode"]}
                                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Save
                    </button>
                </div>

            </div>
        </>
    )
}