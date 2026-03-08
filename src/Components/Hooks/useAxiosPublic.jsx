import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://beauty-zone-server-app.vercel.app",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
