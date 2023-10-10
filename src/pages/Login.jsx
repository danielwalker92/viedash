import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [ email, setEmail ] = useState('') 
    const [ password, setPassword ] = useState('') 

    const loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch(`${import.meta.env.VITE_SERVER_HN}${import.meta.env.VITE_SERVER_PORT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)
    }

    return(
            <main>
                <div className="app-intro">
                    <h1>Viedash</h1>
                    <p>your life, simplified</p>
                </div>
                <form className="app-login" onSubmit={loginUser}> 
                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}    
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                </form>
            </main>
    )
}

export default Login