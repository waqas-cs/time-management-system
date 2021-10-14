import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import styles from '../adminDashboard/AdminDashboard.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import FilterData from '../FilterData/FilterData';


const UserDashboard = () => {
    let history = useHistory()
    let dispatch = useDispatch();

    const [workLogData, setworkLogData] = useState([])
    const [updateList, setUpdateList] = useState(true)
    const [userWorkLog, setUserWorkLog] = useState({
        logDate: "",
        hours: "", 
        desc: ""
    })
    const [showAdd, setShowAdd] = useState(true)
    const [showUpdate, setShowUpdate] = useState(false)
    const [lineIndex, setLineIndex] = useState("")
    const [prefHours, setPrefHours] = useState(8)
    let workingHours = prefHours

    let logDate = userWorkLog.logDate
        let hours = userWorkLog.hours
        let description = userWorkLog.desc

    console.log("before button click ",userWorkLog)

     //************** Importing Token from Redux ******************/ 

    const loginData = useSelector(state => state.loginReducer)
    console.log("User Dashboard Token = ", loginData.postItems.token)
    let token = loginData.postItems.token;

    //*****User Id*****// 
    let userId = loginData?.postItems?.user?.id
    console.log("This is User ID = ", loginData?.postItems?.user?.id)


     //************** Start of useEffect******************/ 

    useEffect(()=>{
        axios
        .get(
            `http://34.210.129.167/api/user/${userId}/work-logs`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }        
        )
        .then((res)=>{
                let Worklogs = res?.data?.workLogs?.data
                setworkLogData(Worklogs)
                 console.log("get users response = ",workLogData)
            })
            // eslint-disable-next-line 
        }, [updateList])

        //************** End of useEffect******************/ 

    //**************start of adding worklog******************/ 

    const addWorklog = async(e) =>{
        e.preventDefault();
        await axios.post("http://34.210.129.167/api/work-logs",
        {
            logDate, hours, description
          },
          {
              headers: {
                Authorization: `Bearer ${token}`,
              },
          } 
        ).then((res)=>{
            const enteredLog = res.data
            console.log("Worklog Created Successfully! ",enteredLog);

            //update list using useEffect when add new worklog
            setUpdateList(!updateList)
        })
    }

    //************** End of adding worklog******************/ 

    /*********** Start of Edit WorkLog**********/

    const editHandler = (value) =>{
        console.log("edit handler = ", value)
        setUserWorkLog({
            logDate: value.log_date,
            hours: value.hours,
            desc: value.description
        })
        setShowAdd(false)
        setShowUpdate(true)
        setLineIndex(value.id)
        console.log("this is line index ",lineIndex)
    }

    const updateWorklog = () =>{
        setShowAdd(true)
        setShowUpdate(false)
        axios.put(`http://34.210.129.167/api/user/${userId}/work-logs/${lineIndex}`,
        {
            logDate, hours, description
          },
          {
              headers: {
                Authorization: `Bearer ${token}`,
              },
          } 
        ).then((res)=>{
            const enteredLog = res.data
            console.log("Worklog Created Successfully! ",enteredLog);

            //update list using useEffect when add new worklog
            setUpdateList(!updateList)
        })

    }
    /*********** End of Edit WorkLog**********/


    /******************** Start of Preferred Working Hours*****************/

    const hoursHandler = () =>{
        axios
        .patch(
            `http://34.210.129.167/api/users/${userId}/preferred-working-hours`,
            {
                workingHours
            },
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }        
        )
        .then((res)=>{
                 console.log("hours updated success fully = ",res)
            })
    }

    /******************** End of Updating Working Hours*****************/

    return (
        <div className={styles.dashboardMain}>
            <div className="container">
                <div className={styles.dashboardWrap}>
                    <div className={styles.dashboardHeader}>
                        <h3>Dashboard</h3>
                        <div className={styles.dashboardButtons}>
                            <button className={styles.Logout}
                            onClick={()=>
                            {
                                token=null;
                                dispatch({type: "FETCH_LOGOUT_REQUEST"})
                                history.push('/')
                            }} >Logout</button>
                        </div>
                    </div>
                    <div className={styles.display}>
                        <div className={styles.displayUser}>
                         {/* Start of Add and Update Worklog */}
                            <div className={styles.form}>
                                <h5>Add and Update Worklog</h5>
                                <div className={styles.userLogForm}>
                                    <form>
                                        <div className="mb-3">                                        
                                            <input type="text" className="form-control" 
                                            value={userWorkLog.logDate}
                                            onChange={(e)=>setUserWorkLog({...userWorkLog, logDate: e.target.value})}
                                            id="logdate" placeholder="YYYY-MM-DD"/>
                                        </div>
                                        <div className="mb-3">                                       
                                            <input type="number" className="form-control" 
                                            value={userWorkLog.hours}
                                            onChange={(e)=>setUserWorkLog({...userWorkLog, hours: e.target.value})}
                                            id="hours" placeholder="Hours"/>
                                        </div>
                                        <div className="mb-3">            
                                            <input type="text" className="form-control" 
                                            value={userWorkLog.desc}
                                            onChange={(e)=>setUserWorkLog({...userWorkLog, desc: e.target.value})}
                                            id="description" placeholder="Description"/>
                                        </div>
                                        <div className="mb-3">
                                            {
                                                showAdd?
                                                <button className="btn btn-primary"
                                                onClick={addWorklog}>
                                                Add Worklog</button>:
                                                null
                                            }
                                            
                                            {showUpdate?
                                            <button className="btn btn-primary updateButton"
                                            onClick={updateWorklog}>
                                            Update Worklog</button>:
                                            null
                                            }
                                        </div>
                                    </form>
                                        {/* Start of Preferred Hours */}
                                    <div className={styles.PrefferedHours}>
                                        <div>
                                            <input type="text" value={prefHours}
                                            onChange={(e)=>{setPrefHours(e.target.value)}}
                                            className="form-control mb-3"
                                            placeholder="Prefered Hours"                                                
                                            />
                                            <button 
                                            className="btn btn-primary updateButton"
                                            onClick={hoursHandler}>Prefered Hours</button>
                                        </div>
                                    </div>
                                     {/* End of Preferred Hours */}
                                </div>
                            </div>
                            {/* End of Add and Update Worklog */}

                            {/* Start of Worklog */}
                            <h5>WorkLog</h5>
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
                                {
                                    workLogData?.map((value, index)=>{
                                        {console.log("worklog map", value)}
                                       return <tr key={index}>
                                        <td>{value.log_date}</td>
                                        <td style={value.hours>=prefHours?{backgroundColor:'green'}:{backgroundColor:'red'}}>
                                            {value.hours}
                                        </td>
                                        <td>{value.description}</td>
                                        <td>
                                            <button className={styles.editButton}
                                            onClick={()=>{editHandler(value)}}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    })
                                }  
                                </tbody>
                            </Table>
                             {/* End of Worklog */}

                        </div>
                    </div>
                    <FilterData/>
                </div>
            </div> 
        </div>
    )
}

export default UserDashboard
