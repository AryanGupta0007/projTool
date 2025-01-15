import {useContext, useEffect} from 'react'
import {FormContext} from '../../contexts/FormContexts.js'
import {GetContext} from "../../contexts/GetContext";
import {useLocation} from 'react-router'
export const TaskForm = () => {
    const {formState, updateFormState, addTask} = useContext(FormContext)
    const {members} = useContext(GetContext)
    const location = useLocation()
    const onChange = ((e) => {
        const {name, value} = e.target
        console.log("onChange task form  ", name, value)
        updateFormState(name, value)
    })
    useEffect(() => {
        console.log("updated form ", formState)
    }, [formState])
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("adding task")
        const locats = location.pathname.split('/')
        // console.log("locast ", locats)
        const sessionData = JSON.parse(sessionStorage.getItem("session"))
        addTask(sessionData.authToken, locats[1])
    }
    return (
        <>
            <div className={"project-form"}
                 style={{position: "relative", bottom: "12vh"}}>
                <form onSubmit={onSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Add Task</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3" style={{position: "relative", left: "17vw"}}>
                                    <label htmlFor="task-name" className="block text-sm/6 font-medium text-gray-900">
                                        Task Name
                                    </label>
                                    <div className="mt-2">
                                        <input type="text" name="task-name" id="task-name" autoComplete="off"
                                               value={formState["task-name"]} onChange={onChange}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="about"
                                           className="block text-sm/6 font-medium text-gray-900">About</label>
                                    <div className="mt-2">
                                    <textarea name="task-about" id="about" rows="3"
                                              value={formState["task-about"]} onChange={onChange}
                                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Describe the task.</p>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="start-date" className="block text-sm/6 font-medium text-gray-900">
                                        Start Date
                                    </label>
                                    <div className="mt-2">
                                        <input type="date" name="task-startDate" id="start-date" autoComplete="off"
                                               value={formState["task-startDate"]} onChange={onChange}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="end-date" className="block text-sm/6 font-medium text-gray-900">
                                        End Date
                                    </label>
                                    <div className="mt-2">
                                        <input type="date" name="task-endDate" id="end-date" autoComplete="off"
                                               value={formState["task-endDate"]} onChange={onChange}
                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="manager" className="block text-sm/6 font-medium text-gray-900">
                                        Assign
                                    </label>

                                    <div className="mt-2">
                                        <select id="manager" name="task-assignee" autoComplete="off"
                                                value={formState["task-assignee"]} onChange={onChange}
                                                className="block w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option value={""}> {"SELECT"} </option>
                                            {members.map((e) => {
                                                return (<option value={e._id}> {e._name} </option>)
                                            })}
                                        </select>
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
