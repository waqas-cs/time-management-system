import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import styles from './AdminDashboard.module.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios'



const AdminDashboard = () => {
    let history = useHistory()
    let dispatch = useDispatch();
    const [usersData, setUsersData] = useState({})
    const [deleteItem, setDeleteItem] = useState({})
    const [userId, setUserId] = useState("")
    const [userUpdated, setUserUpdated] = useState(false)
    const [updateData, setUpdateData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    let firstName = updateData.firstName
    let lastName = updateData.lastName
    let email = updateData.email

    const loginData = useSelector(state => state.loginReducer)
    console.log("Admin Dashboard = ", loginData.postItems.token)
    let token = loginData.postItems.token;

    useEffect(()=>{
        axios
        .get(
            "http://34.210.129.167/api/users",
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }        
        )
        .then((res)=>{
                 setUsersData(res)
                 console.log("All Users = ",res)
            })
             // eslint-disable-next-line
        }, [deleteItem, userUpdated])

        /*********** Start of Delete**********/

        const deleteHandler = (id, index) =>{
            axios
            .delete(
                `http://34.210.129.167/api/users/${id}`,
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                }        
            )
            .then((res)=>{
                setUsersData(res)
                console.log("deleted Successfully")
            })
            .catch(()=>{
                console.log("deleting err")
            })
            console.log("this is delete action ",usersData.data.users.data)
            let deletedItem = usersData.data.users.data
            deletedItem.splice(index, 1)
            setDeleteItem(deletedItem)
            }

             /*********** End of Delete**********/

     /*********** Start of Edit User**********/
    const editHandler = (value) => {
        console.log("********************this is edit Value: ", value)
        setUpdateData({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email
        })
        setUserId(value.id)
    }
    
    const updateUser = (e) =>{
        e.preventDefault()
        console.log("updateUser ", userId)
        axios.put(`http://34.210.129.167/api/users/${userId}`,
        {
            firstName, lastName, email
          },
          {
              headers: {
                Authorization: `Bearer ${token}`,
              },
          }
        ).then((res)=>{
            const userUpdated = res.data
            console.log("Worklog Created Successfully! ",userUpdated);

            //update list using useEffect when add new worklog
            // setUpdateList(!updateList)
            setUserUpdated(!userUpdated)
        })
        setUserUpdated(!userUpdated)
    }
    /*********** End of Edit User**********/

    return (
        <div className={styles.dashboardMain}>
            <div className="container">
                <div className={styles.dashboardWrap}>

                 {/**************Start of Header****************/}

                    <div className={styles.dashboardHeader}>
                        <h3>Dashboard</h3>
                        <div className={styles.dashboardButtons}>
                        <Link to="/signupmanager">
                            <button className={styles.createManager}>Create Manager</button>
                        </Link>
                        <Link to="/signupuser">
                            <button className={styles.createUser}>Create User</button>
                        </Link>
                            <button onClick={()=>
                            {
                                token=null;
                                dispatch({type: "FETCH_LOGOUT_REQUEST"})
                                history.push('/')
                            }}  className={styles.Logout}>Logout</button>
                        </div>
                    </div>

                      {/**************End of Header****************/}

                    {/* *************Start of Editing Form*************** */}
                    <div className={styles.display}>
                        <div className={styles.userLogForm}>
                                    <form>
                                        <div className="mb-3">                                        
                                            <input type="text" className="form-control" 
                                            value={updateData.firstName}
                                            onChange={(e)=>setUpdateData({...updateData, firstName: e.target.value})}
                                            id="logdate" placeholder="First Name"/>
                                        </div>
                                        <div className="mb-3">                                       
                                            <input type="text" className="form-control" 
                                            value={updateData.lastName}
                                            onChange={(e)=>setUpdateData({...updateData, lastName: e.target.value})}
                                            id="hours" placeholder="Last Name"/>
                                        </div>
                                        <div className="mb-3">            
                                            <input type="email" className="form-control" 
                                            value={updateData.email}
                                            onChange={(e)=>setUpdateData({...updateData, email: e.target.value})}
                                            id="description" placeholder="Email"/>
                                        </div>
                                        <div className="mb-3">                                   
                                            <button className="btn btn-primary updateButton"
                                            onClick={updateUser}>
                                            Update User</button>
                                        </div>
                                    </form>
                                </div>

                    {/**************End of Editing Form****************/}


                    {/**************Start of Manager****************/}
                        <div className={styles.displayManager}>
                            <h5>Managers List</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        { usersData.data?.users?.data?.map((value, index)=>{
                                            const role = value.roles[0].name;                                            
                                           {if(role==='manager'){
                                                return ( <tr key={index}>
                                                            <td>{value.firstName}</td>
                                                            <td>{value.lastName}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.roles && value.roles[0].name}</td>
                                                            <td>
                                                                <button className={styles.editButton}
                                                                onClick={()=>{editHandler(value)}}>
                                                                        Edit
                                                                </button>
                                                                <button className={styles.deleteButton}
                                                                onClick={(e)=>{deleteHandler(value.id,index)}}>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>);
                                            }else{
                                                return true;
                                            }
                                          } 
                                          
                                        })
                                        }
                                </tbody>
                            </Table>
                        </div>

                         {/************** End of Manager ****************/}

                        {/*Start of Users List*/}

                        <div className={styles.displayUser}>
                            <h5>Users List</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { usersData.data?.users?.data?.map((value, index)=>{
                                            const role = value.roles[0].name;                                            
                                           {if(role==='user'){
                                                return  <tr key={index}>
                                                            <td>{value.firstName}</td>
                                                            <td>{value.lastName}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.roles && value.roles[0].name}</td>
                                                            <td>
                                                                <button className={styles.editButton}
                                                                onClick={()=>{editHandler(value)}}>
                                                                    Edit
                                                                </button>
                                                                <button className={styles.deleteButton}
                                                                onClick={(e)=>{deleteHandler(value.id,index)}}>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>;
                                            }else{
                                                return true;
                                            }
                                          } 
                                          
                                        })
                                        }
                                    
                                </tbody>
                            </Table>
                        </div>
                         {/*End of Users List*/}
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default AdminDashboard
