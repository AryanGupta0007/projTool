export const TeamMember = (props) => {
    const {e} = props
    return (
        <>
            <div className="bg-gray-800 p-4 border rounded-lg text-white">
                <img src={e.profilePic}
                     alt={"Profile Pic"}
                     className="w-full object-contain object-top rounded-lg"/>

                <div className="text-center mt-4">
                    <h4 className="text-base font-semibold text-white">{e.role}</h4>
                    <p className="text-xs mt-2 text-white">{e.name}</p>
                </div>
            </div>

        </>
    )
}