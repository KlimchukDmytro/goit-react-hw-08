import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { FaArrowLeft } from "react-icons/fa";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };


  const isHomePage = location.pathname === "/";

  return (
    <header className={s.header}>

      {!isHomePage && (
        <button className={s.backButton} onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>
      )}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
