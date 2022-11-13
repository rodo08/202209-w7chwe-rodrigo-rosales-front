import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import decodeToken from "../utils/decodeToken";
import { loginUserActionCreator } from "../../redux/features/userSlice";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };
  return { getToken, removeToken };
};

export default useToken;
