import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, Book } from 'lucide-react'
const Header = () => {
    return (
        <div className='fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800'>
            <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <Link href='/'>
                    <Image
                        src={'/logo.png'}
                        alt='AI LMS'
                        height={60}
                        width={200}
                        className='h-12 w-auto object-contain'
                    />
                </Link>

                <div className='flex items-center space-x-4'>
                    <SignedIn>
                        <Link href='/workspace' className='text-gray-300 hover:text-white flex items-center gap-2'>
                            <Button className='cursor-pointer' variant='outline'>
                                <LayoutDashboard size={18} />
                                <span className='hidden md:inline'>
                                    Workspace
                                </span>
                            </Button>
                        </Link>

                        <Link href={'/course'}>
                            <Button className='flex items-center gap-2 cursor-pointer'>
                                <Book className='cursor-pointer' size={18} />
                                <span className='hidden md:inline'>
                                    My Courses
                                </span>
                            </Button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl='/workspace'>
                            <Button variant='outline'>Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: 'h-10 w-10',
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header