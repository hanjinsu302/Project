import { Link, useSearchParams } from "react-router-dom";

const Header = () => {
  const { searchStudent, setSearchStudent } = useSearchParams();
  return (
    <header className="Header">
      <span>Router Tutorial</span>
      <div>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/products" className="menu-item">
          Product
        </Link>
        <Link to="/student/han" className="menu-item">
          student
        </Link>
        <Link to="/student/codingon" className="menu-item">
          coding
        </Link>
        <Link to="/student/new?name=jinsu" className="menu-item">
          searchParams
        </Link>
      </div>
    </header>
  );
};

export default Header;
