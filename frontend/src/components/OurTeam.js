import {useContext, useEffect} from 'react'
import {AddMember} from "./AddMember";
import {TeamMember} from "./TeamMember";
import {GetContext} from '../contexts/GetContext.js'

export const OurTeam = (props) => {
    const {getMembers, members} = useContext(GetContext)
    useEffect(() => {
        console.log("memes ", members)
    }, [members])
    return (
        <>
            <div style={{position: "relative", bottom: "10vh"}}>
            <AddMember/>
            <div className={"show-team"} style={{position: "relative", top: "5vh"}}>
                <div className="font-sans">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                            {members.map((e) => {
                                return (<TeamMember  e={e}/>)
                            })}
                        </div>
                    </div>
                </div>
            </div>

            </div>

        </>
    )
}