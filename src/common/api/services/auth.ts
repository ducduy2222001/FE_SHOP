import axiosClient from "../clients/axiosClient";
import endpoints from "./endpoints";

export const login = (payload: any) => {
  return axiosClient().post(endpoints.auth.login, payload);
};
