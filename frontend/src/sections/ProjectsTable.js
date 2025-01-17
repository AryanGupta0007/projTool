import {useContext, useEffect} from 'react'
import {TableRow} from '../components/ProjTableRow.js'
import {AddProjectButton} from '../components/AddProjectButton.js'
import {GetContext} from '../contexts/GetContext.js'
export const ProjectsTable = () => {
    const {projects} = useContext(GetContext)
    useEffect(() => {
        console.log(projects)
    }, [projects])
    return (
        <>
            <div className={"projects-table custom-table"}>
                <AddProjectButton />
                <div className="font-[sans-serif] overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="whitespace-nowrap">
                        <tr>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800">
                                Name
                            </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800">
                                Manager
                            </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800">
                                Action
                            </th>
                        </tr>
                        </thead>

                        <tbody className="whitespace-nowrap">
                        {projects.map((e, index) => {
                            console.log(index, e)
                            let manager
                            console.log(`i ${index}`, projects[index])
                            if (projects[index].manager === undefined){
                                manager = "None"
                            }
                            else{
                                manager = e.manager
                            }
                            return <TableRow name={e.name} id={e._id} key={index} manager={manager} />
                        })}
                       </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}