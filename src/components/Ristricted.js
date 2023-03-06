import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Ristricted = ({ component: Component, redirectTo = "/" }) => {
  const { isSucces } = useSelector((state) => state.auth);
  return isSucces ? <Navigate to={redirectTo} /> : Component;
};
export default Ristricted;
