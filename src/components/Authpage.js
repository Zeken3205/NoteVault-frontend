import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Components from "./Comp"
import Alertcontext from '../Context/Alertcontext';
import "../css files/Signup.css"
const Authpage = () => {
    const [signIn, toggle] = React.useState(true);
    const alertcontext = useContext(Alertcontext);
    //signup feature

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

    //login feature
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.Success) {
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            alertcontext.showAlert("Logged in Successfully", "success");
            navigate("/");

        }
        else {
            alertcontext.showAlert("Invalid Credentials", "danger");
        }
    }
    const onlChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className='d-flex my-5'>
                    <h1>NoteVault</h1>

                </div>
                <div className='d-flex my-5'>
                    <Components.Container>
                        <Components.SignUpContainer signinin={signIn}>
                            <Components.Form>
                                <Components.Title>Create Account</Components.Title>
                                <Components.Input type='text' id="name" name="name" onChange={onChange} value={signupcredentials.name} placeholder='Name' />
                                <Components.Input type='email' id="signupemail" name="email" onChange={onChange} value={signupcredentials.email} placeholder='Email' />
                                <Components.Input type='password' id="signuppassword" onChange={onChange} name='password' value={signupcredentials.password} minLength={5} required placeholder='Password' />
                                <Components.Input type='password' id="repassword" name='retypePassword' onChange={onChange} value={signupcredentials.retypePassword} minLength={5} required placeholder='Confirm Password' />
                                <Components.Button onClick={handleSubmit} >Sign Up</Components.Button>
                            </Components.Form>
                        </Components.SignUpContainer>

                        <Components.SignInContainer signinin={signIn}>
                            <Components.Form>
                                <Components.Title>Sign in</Components.Title>
                                <Components.Input type='email' id="email" value={credentials.email} onChange={onlChange} name="email" placeholder='Email' />
                                <Components.Input type='password' id="password" value={credentials.password} onChange={onlChange} name="password" placeholder='Password' />
                                <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                                <Components.Button onClick={handleLoginSubmit}>Sigin In</Components.Button>
                            </Components.Form>
                        </Components.SignInContainer>

                        <Components.OverlayContainer signinin={signIn}>
                            <Components.Overlay signinin={signIn}>

                                <Components.LeftOverlayPanel signinin={signIn}>
                                    <Components.Title>Welcome Back!</Components.Title>
                                    <Components.Paragraph>
                                        To keep connected with us please login with your personal info
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(true)}>
                                        Sign In
                                    </Components.GhostButton>
                                </Components.LeftOverlayPanel>

                                <Components.RightOverlayPanel signinin={signIn}>
                                    <Components.Title>Hello, Friend!</Components.Title>
                                    <Components.Paragraph>
                                        Enter Your personal details and start journey with us
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(false)}>
                                        Sigin Up
                                    </Components.GhostButton>
                                </Components.RightOverlayPanel>

                            </Components.Overlay>
                        </Components.OverlayContainer>

                    </Components.Container>
                </div>
            </div>
        </>
    )
}

export default Authpage
