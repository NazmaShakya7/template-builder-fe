import axios from "../";
import { useAuthContext } from "../context/authContext";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
export const useToken = () => {
  const { setAuth } = useAuthContext();
  const cookies = new Cookies({ path: "/" });
  const navigate = useNavigate();
  const refreshTokenFn = async () => {
    try {
      const response = await axios.post("auth/v1/token/access/", {
        refresh: cookies.get("refreshToken"),
      });
      setAuth((prev) => ({
        ...prev,
        accessToken: response?.data?.data?.access,
      }));
      return response?.data?.data?.access;
    } 
    catch (error) {
      setAuth({});
      cookies.remove("userDetails");
      console.log(
        "token error ",
        error?.response?.data?.errors?.error?.toString()
      );
      navigate("/login", { replace: true });
    }
  };
  return refreshTokenFn;
};