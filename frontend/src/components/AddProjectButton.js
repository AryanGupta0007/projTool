import {useNavigate} from 'react-router'
export const AddProjectButton = () => {
    const navigate = useNavigate()
    const {role} = JSON.parse(sessionStorage.getItem('session'))
    const onClick = () => {
        navigate('/organisation/project/create')
    }
    if (role === "organisation") {
        return (<>
            <div className="add-proj-btn" style={{width: "10vw", height: "10vh"}}>
                <div className="font-[sans-serif] space-x-6 space-y-6 text-center">
                    <button type="button" onClick={onClick}
                            className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">
                        Add project
                    </button>
                </div>
            </div>
        </>)
    }

}