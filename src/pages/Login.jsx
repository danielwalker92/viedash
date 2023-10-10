import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [ email, setEmail ] = useState('') 
    const [ password, setPassword ] = useState('') 
    const [ modal, setModal ] = useState(true)

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

    const registerUser = (e) => {
        toggleModal()
    }

    const toggleModal = () => {
        setModal(!modal)
        setPassword('')
        setEmail('')
    }
 
    return  modal ? (
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
                    <section>
                    <input 
                        type="submit"   
                        value="Login"
                    />
                    <input 
                        type="button"
                        value="Register User"
                        className="register-btn"
                        onClick={toggleModal}
                    />
                    </section>
                </form>
            </main>
    ) : (
        <main>
                <div className="app-intro">
                    <h1>Register</h1>
                </div>
                <form className="app-login"> 
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
                    <section>
                    <input 
                        type="button"
                        value="Go Back"
                        onClick={toggleModal}
                    />
                    <input 
                        type="button"
                        value="Register"
                        onClick={registerUser}
                    />
                    </section>
                </form>
            </main>
    )
}

export default Login