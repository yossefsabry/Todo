import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [atTop, setAtTop] = useState(true);
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.pageYOffset <= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="bg-grayDark">
                {/* Navbar */}
                <div
                    className={`w-full text-white bg-black h-16 fixed top-0 animated z-40 ${
!atTop ? 'bg-black shadow-lg' : ''
}`}
                >
                    <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row">
                        <div className="p-4 flex flex-row items-center justify-between">
                            <a
                                href="#"
                                className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
                            >
                                <svg
                                    className="w-8 h-8 text-purple-600"
                                    width="54"
                                    height="54"
                                    viewBox="0 0 54 54"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>TailwindCSS</title>
                                    <path
                                        fill="currentColor"
                                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                                    ></path>
                                </svg>
                            </a>
                            {/* Button Mobile Nav */}
                            <button
                                className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                                onClick={() => setOpenMobileNav(!openMobileNav)}
                            >
                                <span className="text-lg text-primary">
                                    <i className="fas fa-bell"></i>
                                </span>
                            </button>
                            {/* End Button Mobile Nav */}
                        </div>
                        {/* Navbar Mobile */}
                        <nav
                            className={`flex-col flex-grow pb-4 bg-black shadow-lg rounded-b ${
openMobileNav ? 'flex' : 'hidden'
}`}
                        >
                            {['Notifikasi 1', 'Notifikasi 2', 'Notifikasi 3'].map(
                                (item, index) => (
                                    <a
                                        key={index}
                                        className="block px-4 py-2 mt-2 bg-transparent rounded-lg text-sm font-semibold hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        href="#"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </nav>
                        {/* End Navbar Mobile */}
                        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-black">
                            <a
                                className="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-primary rounded-lg md:mt-0 hover:text-black focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() => setOpenNotification(!openNotification)}
                                    className="flex flex-row items-center w-full px-3 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                >
                                    <span className="text-lg text-primary">
                                        <i className="fas fa-bell"></i>
                                    </span>
                                </button>
                                {openNotification && (
                                    <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                        <div className="px-2 py-2 bg-white rounded-md shadow">
                                            {['Notifikasi 1', 'Notifikasi 2', 'Notifikasi 3'].map(
                                                (item, index) => (
                                                    <a
                                                        key={index}
                                                        className="block px-4 py-2 mt-2 bg-transparent rounded-lg text-sm font-semibold hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        href="#"
                                                    >
                                                        {item}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setOpenUserMenu(!openUserMenu)}
                                    className="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                >
                                    <img
                                        src="https://randomuser.me/api/portraits/men/12.jpg"
                                        className="w-auto h-6 rounded-full"
                                        alt=""
                                    />
                                </button>
                                {openUserMenu && (
                                    <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                        <div className="px-2 py-2 bg-white rounded-md shadow">
                                            {['Forum', 'Chat', 'Link #3'].map((item, index) => (
                                                <a
                                                    key={index}
                                                    className="block px-4 py-2 mt-2 bg-transparent rounded-lg text-sm font-semibold hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    href="#"
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
                {/* End Navbar */}
            </div>
        </>
    );
};

export default Navbar;

