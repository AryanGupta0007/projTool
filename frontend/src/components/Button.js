import {useNavigate} from 'react-router'
export const Button = (props) => {
    const {title, projectID} = props
    const navigate = useNavigate()
    const onClick = () => {
        console.log('hello')
        if (title === "View Details"){
            console.log("projectIDVIEW", projectID)
            navigate(`/${projectID}/tasks/`)
        }
    }
    return (<>
        <div className="add-proj-btn" style={{width: "10vw", height: "10vh", position: "relative", left: "10vw"}}>
            <div className="font-[sans-serif] space-x-6 space-y-6 text-center">
                <button type="button" onClick={onClick}
                        className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">
                    {title}
                </button>
            </div>
        </div>
    </>)
}