import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operation";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.div}>
      {isLoggedIn && <div>{user.email}</div>}
      <ul>
        <NavLink className={s.nav} to="/">
          HomePage
        </NavLink>
        <NavLink className={s.nav} to="/contacts">
          ContactsPage
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={s.nav} to="/login">
              LoginPage
            </NavLink>
            <NavLink className={s.nav} to="/registration">
              RegistrationPage
            </NavLink>
          </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logout())} >Logout</button>}
      </ul>
    </div>
  );
};

export default Header;
