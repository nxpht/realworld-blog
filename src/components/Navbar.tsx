import { Link, NavLink } from "react-router";
import Container from "./Container";
function Navbar() {
  return (
    <nav className="py-2 border-b border-black/10">
      <Container className="flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-brand">
          RealWorld Blog
        </Link>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
