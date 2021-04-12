import { useQuery } from "react-query";
import { getProjects } from "../services/ProjectsService";

export const useProjects = () => useQuery("projects", getProjects);
