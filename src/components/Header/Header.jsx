import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.div}>
      <header></header>
      <ul>
        <NavLink className={s.nav} to="/">
          HomePage
        </NavLink>
        <NavLink className={s.nav} to="/contacts">
          ContactsPage
        </NavLink>
        <NavLink className={s.nav} to="/login">
          LoginPage
        </NavLink>
        <NavLink className={s.nav} to="/registration">
          RegistrationPage
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
