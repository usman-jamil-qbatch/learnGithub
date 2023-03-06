import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ component: Component, redirectTo = "/" }) => {
  const { user, isSucces, isLoading } = useSelector((state) => state.auth);
  return isSucces ? Component : <Navigate to={redirectTo} />;
};
export default Protected;
