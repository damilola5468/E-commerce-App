import axios from "axios";

const BASE_URL = "";

export function getProducts() {
  return axios.post(`${BASE_URL}/products`).then(response => response.data);
}

export function getProducts2() {
  return axios.post(`${BASE_URL}/product2`).then(response => response.data);
}

export function category() {
  return axios.post(`${BASE_URL}/category`).then(response => response.data);
}

export function getCartProducts(cart) {
  return axios
    .post(`${BASE_URL}/c/products`, { cart })
    .then(response => response.data);
}

export function getCategoryProduct(cat) {
  return axios
    .get(`${BASE_URL}/catepro/` + cat)
    .then(response => response.data);
}

export function product(name) {
  return axios
    .get(`${BASE_URL}/product/` + name)
    .then(response => response.data);
}

export function login(data) {
  return axios
    .post(`${BASE_URL}/api/auth`, {
      email: data.email,
      password: data.password
    })
    .then(response => {
      localStorage.setItem("x-access-token", response.data.token);
      localStorage.setItem(
        "x-access-token-expiration",
        Date.now() + 2 * 60 * 60 * 1000
      );
      return response.data;
    })
    .catch(err => Promise.reject("Authentication Failed!"));
}

export function Signup(data) {
  return axios
    .post(`${BASE_URL}/signup`, {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone
    })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject("Signup Failed"));
}

export function Check(data) {
  return axios
    .post(`${BASE_URL}/check`, {
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      address: data.address,
      email: data.email,
      phone: data.phone
    })
    .then(response => {
      return response.data;
    });
}

export function isAuthenticated() {
  return (
    localStorage.getItem("x-access-token") &&
    localStorage.getItem("x-access-token-expiration") > Date.now()
  );
}
