import React from 'react'
import AdminDashboard from '../../components/adminDashboard/AdminDashboard.js'
import ManagerDashboard from '../../components/ManagerDashboard/ManagerDashboard.js'
import UserDashboard from '../../components/UserDashboard/UserDashboard.js'

const Dashboard = () => {
    return (
        <div>
            <AdminDashboard/>
            <ManagerDashboard/>
            <UserDashboard/>
        </div>
    )
}

export default Dashboard
