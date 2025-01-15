import {useEffect, useContext} from 'react'
import {Link} from 'react-router'
import {GetContext} from '../contexts/GetContext.js'
import {Button} from './Button.js'
export const TableRow = (props) => {
    const {name, manager, id} = props
    const {getProfessionalDetails, professionalDetail} = useContext(GetContext)
    useEffect(() => {
        if (manager !== undefined){
        console.log("mana", manager)
        const sessionData = JSON.parse(sessionStorage.getItem('session'))
        getProfessionalDetails(sessionData.authToken, manager)
        console.log("professionalDetail ", professionalDetail)
        }

    }, [])
    return (
        <>
            <tr className="custom-table-row odd:bg-blue-50">
                <td className="p-4 text-sm text-gray-800">
                    {name}
                </td>
                <td className="p-4 text-sm text-gray-800">
                    {professionalDetail['name'] || "None"}
                </td>
                <td className="p-4 text-sm text-gray-800">
                    <Button title={"View Details"} projectID={id}/>
                </td>
            </tr>

        </>
    )
}