'use client';
import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const  Navbar = () => {
    return(
        <Fragment>
            <header className="border-b-1">
                <div className="w-[80%] max-w-7xl mx-auto">
                <nav className="flex items-center justify-between ">
                     <Image src='/medium_logo.png' alt="logo" width={140} height={20}/>
                    <ul className="flex gap-10 justify-between text-sm text-[#242424]">
                        <li className="hidden md:block"><Link href='/'>Our Story</Link></li>
                        <li className="hidden md:block"><Link href="/">Write</Link></li>
                        <li><Link href="/login"> Sign in</Link></li>
                        <li><Link href="/register">Sign up</Link></li>
                    </ul>
                </nav>
                </div>
            </header>

        </Fragment>
    )
}

export default Navbar;