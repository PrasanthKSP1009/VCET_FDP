import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async(e) =>{
    e.preventDefault();
    const req = await axios.post("http://localhost:3001/signup",{
      username:username,
      email:email,
      password:password
    })
    console.log(req);
  }
  return (
    <section>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
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
        Alreay have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
};
export default Register;
