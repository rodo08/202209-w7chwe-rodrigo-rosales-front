import { useCallback } from "react";
import { loadUserListActionCreator } from "../../redux/features/userListSlice/userListSlice";
import { useAppDispatch } from "../../redux/hooks";
import { UsersApi } from "../../types/types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");

  const loadAllUsers = useCallback(async () => {
    try {
      const response = await fetch(`${url}/users`, {
        headers: {
          "Content-Type": "text/plain",
          Authorization: "Bearer " + token,
        },
      });

      if (response.status !== 200) {
        throw new Error("No data found");
      }
      const apiResponse: UsersApi = await response.json();
      dispatch(loadUserListActionCreator(apiResponse.users));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [dispatch, token, url]);
  return { loadAllUsers };
};

export default useApi;
