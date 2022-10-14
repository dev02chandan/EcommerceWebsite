import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
}
