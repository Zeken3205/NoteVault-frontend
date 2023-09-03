import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css files/Signup.css"
const SignUp = () => {
    const [signupcredentials, setSignupCredentials] = useState({ name: "", email: "", password: "", retypePassword: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!onCheckpassword()) {
            return;
        }
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: signupcredentials.name, email: signupcredentials.email, password: signupcredentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else {
            alert("Invalid Credentials")
        }
    }

    const onChange = (e) => {
        setSignupCredentials({ ...signupcredentials, [e.target.name]: e.target.value })
    }
    const onCheckpassword = () => {
        if (signupcredentials.password !== signupcredentials.retypePassword) {
            alert("Password does not match with Retyped Password");
            return false;
        }
        return true;
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} value={signupcredentials.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="signupemail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="signupemail" name="email" onChange={onChange} value={signupcredentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="signuppassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signuppassword" onChange={onChange} name='password' value={signupcredentials.password} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="repassword" className="form-label">Retype Password</label>
                    <input type="password" className="form-control" id="repassword" name='retypePassword' onChange={onChange} value={signupcredentials.retypePassword} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign-up</button>
            </form>
        </div>
    )
}

export default SignUp
