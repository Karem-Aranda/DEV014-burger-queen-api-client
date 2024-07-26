import { getUserToken, setUserToken } from "./UserService";
import { API_URL } from "./constants";

export function loginUser(email: string, password: string) {
  const endPoint = `${API_URL}/login`;

  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(endPoint, options)
    .then((res) => res.json())
    .then((res) => {
      if (res.user) {
        const { user, accessToken } = res;

        setUserToken(accessToken);
        return user;
      } else {
        throw new Error(res);
      }
    });
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dataEntry: string;
}

export interface Order {
  productId: string;
  productName: string;
  productPrice: number;
  totalPrice: number;
  numberOfProducts: number;
}

export function getProducts(): Promise<Product[]> {
  const products = `${API_URL}/products`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getUserToken()}`,
    },
  };

  //verificar que tiene res y ver que regresa con console.log
  return fetch(products, options)
    .then((res) => res.json())
    .then((res) => {
      if (res.length) {
        return res;
      } else {
        throw new Error(res);
      }
    });
}
