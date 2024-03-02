import axios from "axios";

export const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "ccfb810e-d396-43d3-bd23-d75be8db7355",
  },
});
