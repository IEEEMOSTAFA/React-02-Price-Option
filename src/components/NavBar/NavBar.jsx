// import { list } from 'postcss';
// import React from 'react';

import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/profile", name: "Profile" }
    ];



    return (
        <nav className="text-black p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose /> : <HiMenuAlt1  />
                }
            
            </div>
            <ul className={`md:flex duration-1000
             absolute md:static 
                ${open ? 'top-16': '-top-60'}
                bg-yellow-200 px-6 `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>

        </nav>
    );
};

export default NavBar;