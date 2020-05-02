import axios from "axios";

const BASE_URL = "https://bh-couture.herokuapp.com";

export function getProducts() {
  return axios.post(`${BASE_URL}/products`).then(response => response.data);
}

export function getSubCat(id) {
  return axios.get(`${BASE_URL}/SubCat/` + id).then(response => response.data);
}

export function getSubCatPro(id) {
  return axios
    .get(`${BASE_URL}/SubCatpro/` + id)
    .then(response => response.data);
}

export function getsubSubCat(id) {
  return axios
    .get(`${BASE_URL}/subSubCat/` + id)
    .then(response => response.data);
}

export function getsubSubProduct(id) {
  return axios
    .get(
      `${BASE_URL}/Sububproduct
/` + id
    )
    .then(response => response.data);
}

export function getallsubSubProduct(id) {
  return axios
    .get(
      `${BASE_URL}/Sububpro
/` + id
    )
    .then(response => response.data);
}

export function getProducts2() {
  return axios.post(`${BASE_URL}/product2`).then(response => response.data);
}

export function category() {
  return axios.post(`${BASE_URL}/category`).then(response => response.data);
}

export function Type() {
  return axios.post(`${BASE_URL}/type`).then(response => response.data);
}

export function userpay(email) {
  return axios.get(`${BASE_URL}/pay/` + email).then(response => response.data);
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

export function productby_id(id) {
  return axios
    .get(`${BASE_URL}/product_id/` + id)
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
      localStorage.setItem("user", data.email);
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

export function Order_1(data) {
  return axios
    .post(`${BASE_URL}/delivery`, {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      phone2: data.phone2,
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
