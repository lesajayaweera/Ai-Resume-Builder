/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react';
import '../../output.css'

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='flex justify-between items-center p-4'>
            <div className='text-2xl font-bold flex items-center gap-2'>
                <Link to={'/'}>
                    <img src='/vite.svg' width={50} height={50} alt='Logo'/>
                </Link>
                <p>AI Resume Builder</p>
            </div>

            <div>
                {isSignedIn ? (
                    <div className="flex items-center gap-4">
                        <Link to={'/dashboard'}>
                            <button className='px-4 py-2 rounded hover:bg-purple-600 font-bold text-amber-50 bg-purple-500'>
                                dashboard
                            </button>
                        </Link>
                        <UserButton />
                    </div>
                ) : (
                    <Link to={'/signup'}>
                        <button className='px-4 py-2 rounded hover:bg-purple-600 font-bold text-amber-50 bg-purple-500'>
                            Get Started
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header;
