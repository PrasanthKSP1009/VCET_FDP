import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><li>Home</li></Link>
      <Link to="/class-comp"><li>Learning React</li></Link>
      <ol><div>Hooks
        <Link to="/use-state"><li>UseState</li></Link>
        <Link to="/use-effect"><li>UseEffect</li></Link>
        <Link to="/use-effect-api"><li>UseEffectWithAPI</li></Link>
        <Link to="/use-ref"><li>UseRef</li></Link>
      </div></ol>
      <Link to="/contact"><li>Contact Us</li></Link>
      <Link to="/login"><li>Login</li></Link>

    </nav>
  );
};

export default Navbar;
