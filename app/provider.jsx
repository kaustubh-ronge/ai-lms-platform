"use client"
import {  SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

// ensure cookies are sent with every request (required for Clerk middleware)
axios.defaults.withCredentials = true;

const Provider = ({ children }) => {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState();
    const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

    useEffect(() => {
        user && createNewUser();
    }, [user])
    const createNewUser = async () => {
        try {
            const result = await axios.post('/api/user', {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress
            });
            setUserDetail(result.data);
        } catch (err) {
            // log details so we can see if the route exists or if auth is failing
            console.error('createNewUser failed', err.response?.status, err.message);
        }
    }

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            <SelectedChapterIndexContext.Provider value={{selectedChapterIndex,setSelectedChapterIndex}}>
                <div>
                    {children}
                </div>
            </SelectedChapterIndexContext.Provider>
        </UserDetailContext.Provider>
    )
}

export default Provider
