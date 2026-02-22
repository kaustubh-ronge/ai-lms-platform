'use client'

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Book, Compass, LayoutDashboard, LayoutDashboardIcon, PencilRulerIcon, UserCircle2Icon, WalletCards } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AddNewCourseDialog from "./AddNewCourseDialog"

const SiderBarOptions = [
      {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        path: '/'
    },
    {
        title: 'Workspace',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'My Learning',
        icon: Book,
        path: '/workspace/my-learning'
    },
    // {
    //     title: 'Explore Courses',
    //     icon: Compass,
    //     path: '/workspace/explore'
    // },
    {
        title: 'AI Tools',
        icon: PencilRulerIcon,
        path: '/workspace/ai-tools'
    },
    // {
    //     title: 'Billing',
    //     icon: WalletCards,
    //     path: '/workspace/billing'
    // },
    {
        title: 'Profile',
        icon: UserCircle2Icon,
        path: '/workspace/profile'
    },
]

export function AppSidebar() {

    const path = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className='p-4'>
                <Image src={'/logo.svg'} width={120} height={100} alt="logo" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <AddNewCourseDialog>
                        <Button className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 w-full text-white font-bold'>Create New Course</Button>
                    </AddNewCourseDialog>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SiderBarOptions.map((item, index) => {
                                
                                const isActive = path === item.path;

                                return (
                                    <SidebarMenuItem key={index}>
                                        <SidebarMenuButton asChild>
                                            <Link 
                                                href={item.path} 
                                                className={`
                                                    w-full 
                                                    flex 
                                                    items-center 
                                                    gap-3 
                                                    p-4 
                                                    rounded-lg 
                                                    text-[17px] 
                                                    transition-all 
                                                    duration-200
                                                    ${isActive 
                                                        // Active state: Vibrant and bold
                                                        ? 'bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700' 
                                                        // Inactive state: Darker text for visibility
                                                        : 'text-white font-medium hover:bg-gray-100'
                                                    }
                                                `}
                                            >
                                                <item.icon className="h-6 w-6" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}