import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="flex justify-between  bg-base-100 mx-10">
                <div className=" flex justify-center items-center">

                    <div>
                        <a className="btn btn-ghost text-[#2C1B9A] normal-case text-3xl">BizPhix</a>
                    </div>
                    <div className='navContainer'>
                        <ul className="menu  menu-horizontal px-1 font-bold text-[#473a98] text-xl">
                            <li><a>How it Works</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Services</summary>
                                    <ul className="p-2 w-[300px]">
                                        <li><a>Cliping Path</a></li>
                                        <li><a>Background Remove</a></li>
                                        <li><a>Subject Masking</a></li>
                                        <li><a>Shadow</a></li>
                                        <li><a>Color Change</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Credits</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Help</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="navbar-center ">


                </div> */}
                <div className="mt-5">
                    <ul className="menu  menu-horizontal px-1 navContainer">

                        <button className="btn text-xl btn-primary">Order your edits</button>
                        <button className="btn text-xl ms-5">Currency | USD</button>

                    </ul>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] -ms-[100px] p-3 shadow bg-base-100 rounded-box  ">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;