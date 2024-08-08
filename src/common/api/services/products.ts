import axiosClient from "../clients/axiosClient";
import endpoints from "./endpoints";

export const getListProduct = (payload: any) => {
  return axiosClient().post(endpoints.products.getListProduct, payload);
};
