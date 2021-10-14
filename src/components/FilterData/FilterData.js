import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import styles from './FilterData.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
const FilterData = () => {

    const [dates, setDates] = useState({
        startDate: "",
        endDate: ""
    })
    let startingDate = dates.startDate
    let endingDate = dates.endDate

    const [filteredData, setFilteredDate] = useState([])
    
    const loginData = useSelector(state => state.loginReducer)
    console.log("Filter Data Token = ", loginData.postItems.token)
    let token = loginData.postItems.token;

    console.log("ddates are = ", dates)


    /* Start of Filter Function */
    const filterHandler = (e) =>{
        e.preventDefault();
        axios
        .get(
            `http://34.210.129.167/api/work-logs/${startingDate}/${endingDate}`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }        
        )
        .then((res)=>{
            let data = res.data.workLogs
            setFilteredDate(data)
             console.log("get filtered response = ",filteredData)    
        })
        .catch(()=>{
            console.log("filter response error")
        })
    }
     /* End of Filter Function */

    return (
        <div className={styles.filterDataMain}>
            <div className="container">
                <div className={styles.filterDataWrap}>
                <h3>Filter by Date</h3>
                <div className={styles.formData}>
                    <form>
                        from : <input type="text" value={dates.startDate}
                                className="form-control mb-3"
                                placeholder=" YYYY-MM-DD"
                                onChange={(e)=>setDates({...dates, startDate: e.target.value})}
                        />
                        to : <input type="text" value={dates.endDate}                
                                className="form-control mb-3"
                                placeholder=" YYYY-MM-DD"
                                onChange={(e)=>setDates({...dates, endDate: e.target.value})}
                        />
                        <button className="btn btn-primary updateButton"
                        onClick={e=>{filterHandler(e)}}>Filter</button>
                    </form>
                </div>
                {/** Start of Table **/}
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Hours</td>
                                <td>Description</td>
                                <td>Last Login</td>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                        {
                            filteredData?.map((value, index)=>{
                                        {console.log("worklog map", value)}
                                       return( <tr key={index}>
                                        <td>{value.log_date}</td>
                                        <td >{value.hours}</td>
                                        <td>{value.description}</td>
                                        <td>{value.user.lastLogin}</td>
                                    </tr>)
                                    })
                                }   
                        </tbody>
                 </Table>
                  {/** End of Table **/}
                </div>
            </div>
        </div>
    )
}

export default FilterData
