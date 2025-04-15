import useAuth from "@/commons/auth";
import menus, { settingsMenu } from "@/menus";
import { useLocation, useNavigate } from "react-router";
import { useCookies } from "react-cookie";



export default function useNavigation() {
  const { checkPermission, isAuthenticated, logout } = useAuth();
  const { pathname } = useLocation();
  const isNotAuthPage = !["/register", "/login", "/forgot-password"].includes(
    pathname
  );
  const navbarMenus = [
    ...menus,
    ...(checkPermission("administrator") ? settingsMenu : []),
  ];
  const [cookies, setCookie, removeCookie] = useCookies(["selectedProdi"]);
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("selectedProdi", { path: "/" });
    logout();
    navigate("/");
  };

  return {
    isAuthenticated,
    isNotAuthPage,
    navbarMenus,
    handleLogout,
  };
}
