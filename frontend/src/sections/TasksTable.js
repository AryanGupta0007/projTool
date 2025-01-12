import {TaskTableRow} from '../components/TaskTableRow.js'

export const TasksTable = () => {
    return (
        <>
            <div className="custom-table overflow-x-auto font-[sans-serif]">
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                    <tr>
                        <th className="p-4 text-sm font-semibold bg-blue-500 text-white text-center">
                            Task List
                        </th>
                        <th className="p-4 text-sm font-semibold bg-red-500 text-white text-center">
                            Assign
                        </th>
                        <th className="p-4 text-sm font-semibold bg-green-500 text-white text-center">
                            Priority
                        </th>
                        <th className="p-4 text-sm font-semibold bg-yellow-500 text-white text-center">
                            Status
                        </th>
                        <th className="p-4 text-sm font-semibold bg-purple-800 text-white text-center">
                            Progress
                        </th>
                    </tr>
                    </thead>

                    <tbody className="whitespace-nowrap divide-y divide-gray-200">
                    <TaskTableRow/>
                    <TaskTableRow/>
                    <TaskTableRow/>
                    </tbody>
                </table>
            </div>
        </>
    )
}