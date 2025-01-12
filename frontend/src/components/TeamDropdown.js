export const TeamDropdown = () => {
    return (
        <>
            <div className="teamdropdown">
                <div className="relative font-[sans-serif] w-max mx-auto">
                    <button type="button" id="dropdownToggle"
                            className="px-6 py-3 rounded text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                        Select Dropdown Team List
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white inline ml-3"
                             viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                  clipRule="evenodd" data-original="#000000"/>
                        </svg>
                    </button>

                    <ul id="dropdownMenu"
                        className='absolute block shadow-lg shadow-blue-100 bg-white py-4 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
                        <li className='py-3 px-4 flex items-center hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <img src="https://readymadeui.com/profile_2.webp"
                                 className="w-8 h-8 rounded-full shrink-0 mr-3"/>
                            John Doe
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                 className="inline-block ml-auto fill-blue-600"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                    data-original="#000000"/>
                            </svg>
                        </li>
                        <li className='py-3 px-4 flex items-center hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <img src="https://readymadeui.com/team-3.webp"
                                 className="w-8 h-8 rounded-full shrink-0 mr-3"/>
                            Aleena
                        </li>
                        <li className='py-3 px-4 flex items-center hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <img src="https://readymadeui.com/team-2.webp"
                                 className="w-8 h-8 rounded-full shrink-0 mr-3"/>
                            Justin kelwn
                        </li>
                        <li className='py-3 px-4 flex items-center hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <img src="https://readymadeui.com/team-5.webp"
                                 className="w-8 h-8 rounded-full shrink-0 mr-3"/>
                            Mark Justin
                        </li>

                        <li className="px-2 mt-4 sticky bottom-0">
                            <button type="button"
                                    className="px-6 py-3 rounded w-full text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Add
                                Teammate
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}