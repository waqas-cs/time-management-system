import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import styles from '../adminDashboard/AdminDashboard.module.css'

const ManagerDashboard = () => {
    return (
        <div className={styles.dashboardMain}>
            <div className="container">
                <div className={styles.dashboardWrap}>
                    <div className={styles.dashboardHeader}>
                        <h3>Dashboard</h3>
                        <div className={styles.dashboardButtons}>
                            <button className={styles.createUser}>Create User</button>
                            <button className={styles.Logout}>Logout</button>
                        </div>
                    </div>
                    <div className={styles.display}>
                        <div className={styles.displayUser}>
                            <h5>Users List</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ManagerDashboard
