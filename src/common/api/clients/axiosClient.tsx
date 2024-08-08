import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { ERROR_CODE } from "../constant";
const axiosClient = (token: string | null = null): AxiosInstance => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    : {
        "Content-Type": "application/json",
      };

  const client = axios.create({
    baseURL: "http://localhost:4000",
    headers,
    timeout: 60000,
    withCredentials: true,
  });

  client.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers = config.headers || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      try {
        const { response } = error;
        if (response) {
          if (response?.status === ERROR_CODE.Authentication) {
            window.location.href = "/login";
            // } else if (response?.status === ERROR_CODE.NotFound) {
            //   window.location.href = "*";
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
  );

  return client;
};

export default axiosClient;
