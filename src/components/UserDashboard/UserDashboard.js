import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import styles from '../adminDashboard/AdminDashboard.module.css'

const UserDashboard = () => {
    return (
        <div className={styles.dashboardMain}>
            <div className="container">
                <div className={styles.dashboardWrap}>
                    <div className={styles.dashboardHeader}>
                        <h3>Dashboard</h3>
                        <div className={styles.dashboardButtons}>
                            <button className={styles.Logout}>Logout</button>
                        </div>
                    </div>
                    <div className={styles.display}>
                        <div className={styles.displayUser}>
                            <div className={styles.form}>
                                <h5>Add Record</h5>
                                <div className={styles.userLogForm}>
                                    <form>
                                        <div class="mb-3">                                        
                                            <input type="text" class="form-control" id="logdate" placeholder="Work Log"/>
                                        </div>
                                        <div class="mb-3">                                       
                                            <input type="text" class="form-control" id="hours" placeholder="Hours"/>
                                        </div>
                                        <div class="mb-3">            
                                            <input type="text" class="form-control" id="description" placeholder="Description"/>
                                        </div>
                                        <div class="mb-3">
                                            <button class="btn btn-primary">Add Worklog</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h5>Users List</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Log Date</th>
                                        <th>Hours</th>
                                        <th>Description</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tableBody}>
                                    <tr>
                                        <td>12-12-2020</td>
                                        <td>08</td>
                                        <td>React Project</td>
                                        <td>
                                            <button className={styles.buttonAction}>Edit</button>
                                            <button className={styles.buttonAction}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default UserDashboard
