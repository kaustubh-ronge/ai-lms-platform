import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const AppHeader = ({ hideSidebar = false }) => {
    return (
        <div className='p-4 flex justify-between items-center shadow-lg border-b'>
            {!hideSidebar && < SidebarTrigger />}
            <Link href={'/workspace'}><Button className={'bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300'}>
                Go To Workspace
            </Button></Link>
            <UserButton />
        </div>
    )
}

export default AppHeader
