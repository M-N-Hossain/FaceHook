import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
// import { useAuth } from "../../hooks/useAuth";
export default function Logout() {
  // const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear the user object
    // setAuth({});
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
