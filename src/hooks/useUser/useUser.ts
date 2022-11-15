import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  JwtCustomPayload,
  UserCredentials,
  UserRegisterData,
} from "../../types/types";
import useToken from "../useToken/useToken";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const url = process.env.REACT_APP_API_URL!;

  const loginUser = async (userData: UserCredentials) => {
    try {
      const responseData = await fetch(`{$url}/users/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      const { token } = await responseData.json();
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
    } catch (error: unknown) {
      throw new Error(
        `It's not possible to log in: ${(error as Error).message}`
      );
    }
  };

  const logoutUser = () => {
    try {
      removeToken();
      dispatch(logoutUserActionCreator());
    } catch (error: unknown) {
      throw new Error(
        `It's not possible to log out: ${(error as Error).message}`
      );
    }
  };

  const registerUser = async (userData: UserRegisterData) => {
    try {
      const responseData = await fetch(`${url}/users/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error: unknown) {
      throw new Error(
        `It's not possible to register: ${(error as Error).message}`
      );
    }
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
