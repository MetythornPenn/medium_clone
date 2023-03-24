/* eslint-disable @next/next/no-img-element */
// rfce

import Link from 'next/link';
import React from 'react';
import NavLogo from '../public/assets/logo/ac_logo_2.png';
import Image from 'next/image';

function Header() {
    return (
        <header className="flex justify-between p-5  max-w-7xl mx-auto"> {/* max-w-7xl */}
            <div className="flex items-center space-x-5">
                <div>
                    <Link href="/">
                        {/* <Image
                        className="w-44 object-contain cursor-pointer" 
                        src= {NavLogo}
                        alt="/" 
                        width = "80"
                        height = "50"
                        /> */}
                        <img
                        className="w-44 object-contain cursor-pointer"
                        src="https://links.papareact.com/yvf" 
                        alt="" 
                        />
                    </Link>             
                </div>

                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
                        Follow
                    </h3>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-green-600">
                <h3>Sign In</h3>
                <h3 className='border border-green-600 px-4 py-1 rounded-full'>
                    Get Started
                </h3>
            </div>
        </header>


    ) 
}   

export default Header










