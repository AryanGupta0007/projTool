import {useContext, useEffect} from 'react'
import {useLocation} from 'react-router'
import {TaskTableRow} from '../components/TaskTableRow.js'
import {AddTaskButton} from "../components/AddTaskButton";
import {GetContext} from '../contexts/GetContext.js'
export const TasksTable = () => {
    const {tasks, getTasks} = useContext(GetContext)
    const location = useLocation()
    useEffect(()=>{
        const locats = location.pathname.split('/')
        console.log("locast ", locats)
        const sessionData = JSON.parse(sessionStorage.getItem(
            'session'
        ))
         getTasks(sessionData.authToken, locats[1])
    }, [])
    return (

        <>
            <div className="custom-table overflow-x-auto font-[sans-serif]">
                <AddTaskButton />

                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                    <tr>
                        <th className="p-4 text-sm font-semibold bg-blue-500 text-white text-center">
                            Task Name
                        </th>
                        <th className="p-4 text-sm font-semibold bg-red-500 text-white text-center">
                            Assigned To
                        </th>
                        <th className="p-4 text-sm font-semibold bg-green-500 text-white text-center">
                            start
                        </th>
                        <th className="p-4 text-sm font-semibold bg-yellow-500 text-white text-center">
                            due
                        </th>
                        <th className="p-4 text-sm font-semibold bg-purple-500 text-white text-center">
                            Priority
                        </th>
                        <th className="p-4 text-sm font-semibold bg-green-500 text-white text-center">
                            Label
                        </th>
                        <th className="p-4 text-sm font-semibold bg-red-500 text-white text-center">
                            Progress
                        </th>
                    </tr>
                    </thead>

                    <tbody className="whitespace-nowrap divide-y divide-gray-200">
                    {
                        tasks.map((e) => {
                            return <TaskTableRow name={e.name} assignee={e.manager} e={e} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}