import { Link, NavLink } from "react-router";
import Container from "./Container";
function Navbar() {
  return (
    <nav className="py-2">
      <Container className="flex justify-between items-center">
        <Link to="/" className="font-700 text-2xl text-[#61BB61]">
          RealWorld Blog
        </Link>
        <ul className="flex gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
