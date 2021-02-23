import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Dojo Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
