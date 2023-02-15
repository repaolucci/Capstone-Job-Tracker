import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        if (email && pass){
            console.log('not empty');  
            history.push("/view-page")
        }
    }
   

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email@gmail.com" name="email"/>

                <label htmlFor="password">password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)}id="password" type="password" placeholder="**********" name="password"/>
                
                <button >Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>No Account? Register Here</button>
        </div>
    )
}