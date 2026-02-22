import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='font-bold text-3xl mb-7'>Manage your Profile</h2>
      <UserProfile />
    </div>
  )
}

export default Profile
