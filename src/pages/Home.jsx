import './Home.css'

const Home = ({ checkLog }) => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to your dashboard</p>
            <button onClick={checkLog}>Logout</button>
        </div>
    )
}

export default Home