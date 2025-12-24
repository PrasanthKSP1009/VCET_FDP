import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <form>
        <label htmlFor="email">Email ID:</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <button>Submit</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </section>
  );
};
export default Login;
