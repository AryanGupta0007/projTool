export const Card = (props) => {
    return (
        <>
            <div style={{width: "15vw", height: "18vh"}}
                className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="p-6">
                    <h3 className="text-lg font-semibold">{props.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    )
}