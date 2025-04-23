import axios from "./axios";

export const loginRequest = (user) =>
  axios.post("/login", user, { withCredentials: true });

export const verifyTokenRequest = () =>
  axios.get("/verify-token", { withCredentials: true });

export const logout = (user) =>
  axios.post("/logout", user, { withCredentials: true });
