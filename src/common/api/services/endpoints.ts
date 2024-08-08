const products = "/products";
const auth = "/auth";

export default {
  auth: {
    login: `${auth}/login`,
  },
  products: {
    getListProduct: `${products}/getListProduct`,
  },
} as const;
