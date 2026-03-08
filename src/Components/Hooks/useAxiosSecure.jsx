import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthContext";

const axiosSecure = axios.create({
  baseURL: "https://beauty-zone-server-app.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await logout();
        navigate("/signin");
      }
      return Promise.reject(error);
    },
  );

  return axiosSecure;
};

export default useAxiosSecure;
