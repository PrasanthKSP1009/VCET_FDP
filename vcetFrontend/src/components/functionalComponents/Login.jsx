import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async(e) =>{
    e.preventDefault()
    const req = await axios.post("http://localhost:3001/login",{
      email:email,
      password:password
    })
    console.log(req);
    console.log(req.data);
    console.log(req.data.isLogin,req.data.message);
    const isLogin = req.data.isLogin
    const message = req.data.message
    if(isLogin){
      alert(message);
      navigate('/')
    } else {
      alert(message)
    }
  }
  return (
    <section>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email ID:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
};
export default Login;
