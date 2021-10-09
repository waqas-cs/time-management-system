import React, {useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Signup.module.css'
import axios from 'axios'

const Signup = () => {

    const [signup, setSignup] = useState(
        {
            firstName: "",
            lastName: "", 
            email: "", 
            password: "", 
            password_confirmation: ""  
            }
    )

    let firstName = signup.firstName
    let lastName = signup.lastName
    let email = signup.email
    let password = signup.password
    let password_confirmation = signup.password_confirmation
    
    const submitHandler = async () => {
        console.log(signup)

       let regrister = await axios.post("http://34.210.129.167/api/register", {
            firstName, lastName, email, password, password_confirmation

            // method: 'POST',
            // body: JSON.stringify(signup),
            // headers: {
            //     "Content-type":'application/json',
            //     "Accept": 'application/json'
            // }
        })
        .then(function (response) {
            console.log(response);
          })
    }
    return (
        <div className={styles.sigupMain}>
            <div className="container">
                <div className={styles.sigupMainWrap}>
                    <div className={styles.sigupForm}>
                        <h3>Create Manager Account</h3>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFirstname"
                            value={signup.firstName}
                            onChange={(e)=>setSignup({...signup, firstName: e.target.value})}
                            placeholder="First Name"/>
                            <label htmlFor="floatingFirstname">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingLastname" 
                            value={signup.lastName}
                            onChange={(e)=>setSignup({...signup, lastName: e.target.value})}
                            placeholder="Last Name"/>
                            <label htmlFor="floatingLastname">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" 
                            value={signup.email}
                            onChange={(e)=>setSignup({...signup, email: e.target.value})}
                            placeholder="name@example.com"/>
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" 
                            value={signup.password}
                            onChange={(e)=>setSignup({...signup, password: e.target.value})}
                            placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingConfirmPassword" 
                            value={signup.password_confirmation}
                            onChange={(e)=>setSignup({...signup, password_confirmation: e.target.value})}
                            placeholder="Confirm Password"/>
                            <label htmlFor="floatingConfirmPassword"> Confirm Password</label>
                        </div>
                        <button type="button" 
                        onClick={submitHandler}
                        className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
