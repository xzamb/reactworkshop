import React, { useState} from 'react';

import './login.css';

export default function Login({history}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        
        if(username && password === '123'){
            history.push('/main');
        }
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}> 
                <input value={username} onChange={event => setUsername(event.target.value)} placeholder="username"/>
                <input value={password} onChange={event => setPassword(event.target.value)} placeholder="password" type="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}