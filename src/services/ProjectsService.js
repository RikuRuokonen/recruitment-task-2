import { callApi } from "../api";

export const getProjects = () => callApi("GET", "/data", null);
