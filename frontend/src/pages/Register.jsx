import React, { useState } from 'react';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}name="name" id="name" placeholder='Full Name'/>

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email@gmail.com" name="email"/>

                <label htmlFor="password">password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)}id="password" type="password" placeholder="**********" name="password"/>
                
                <button>Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Got an Account? Login here</button>
        </div>
    )

}