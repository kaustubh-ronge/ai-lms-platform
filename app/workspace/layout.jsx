import React from 'react'
import WorkSpaceProvider from './provider'

const WorkSpaceLayout = ({ children }) => {
    return (
        <WorkSpaceProvider>
            {children}
        </WorkSpaceProvider>
    )
}

export default WorkSpaceLayout
