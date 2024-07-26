import { Navigate } from "react-router-dom";
import { getUserToken } from "../services/UserService";

interface PrivateRoute {
  component: React.ReactNode;
}

const PrivateRoute = ({ component }: PrivateRoute) => {
  const usuario = getUserToken();

  if (!usuario) {
    return <Navigate to="/login" />;
  }
  //Va a renderiar el componente
  return component;
};

export default PrivateRoute;
