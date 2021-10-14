import React from 'react'
import AdminDashboard from '../../components/adminDashboard/AdminDashboard.js'
import ManagerDashboard from '../../components/ManagerDashboard/ManagerDashboard.js'
import UserDashboard from '../../components/UserDashboard/UserDashboard.js'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    let role =""
    const loginData = useSelector(state => state.loginReducer)
    role = loginData?.postItems?.user?.roles && loginData?.postItems?.user?.roles[0].name
    console.log("Main Dashboard = ", role)
    // const role = "admin"

    var loggedInUser;
    if(role==="admin"){
        loggedInUser =  <AdminDashboard/>
    }else if(role==="manager"){
        loggedInUser =  <ManagerDashboard/>
    }else if(role==="user"){
        loggedInUser =  <UserDashboard/>
    }
    
    return (
        <div>
            {loggedInUser}
        </div>
    )
}

export default Dashboard
