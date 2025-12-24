import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br /><br />
        <label htmlFor="email">Email ID:</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <button>Submit</button>
      </form>
      <p>Alreay have an account? <Link to="/login">Login</Link></p>
    </section>
  );
};
export default Register;
