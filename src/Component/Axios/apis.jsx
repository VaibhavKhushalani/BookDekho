import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "https://booksdekho-backend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("BooksDekho")) {
    req.headers["Authorization"] = Cookies.get("BooksDekho");
  }
  return req;
});

export const FetchSignin = (data) => API.post("/auth/login", data);
export const FetchSignup = (data) => API.post("/auth/register", data);
export const PostContact = (data) => API.post("/contact", data);
