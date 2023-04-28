import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
// import classes from "./MainHeader.module.css";

const MainNavigation = () => {
  const atuhCntx = useContext(AuthContext);

  const isLoggedIn = atuhCntx.isLoggedIn;

  return (
    <header>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
