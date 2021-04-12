import { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import ProjectsTable from "../components/ProjectsTable";
import { sortByStartDate } from "../utils/helpers";
import { useProjects } from "../queries/projectsQueries";

const Container = styled.div`
  padding: 60px;
  max-width: 100%;
`;

const FrontPage = () => {
  const { isLoading, isError, data: projects } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState(null);

  useEffect(() => {
    projects &&
      setFilteredProjects([...sortByStartDate(projects.data, "desc")]);
  }, [projects]);

  const filterByWord = (string) =>
    setFilteredProjects(
      projects.data.filter((project) =>
        Object.keys(project).some((key) =>
          String(project[key]).toLowerCase().includes(string.toLowerCase())
        )
      )
    );

  const filterByDate = (direction) =>
    setFilteredProjects([...sortByStartDate(filteredProjects, direction)]);

  return (
    <Container>
      <h2>Sievo Solutions</h2>
      <label>Search</label>
      <input onChange={(e) => filterByWord(e.target.value)}></input>
      <label>Sort by date</label>
      <select onChange={(e) => filterByDate(e.target.value)}>
        <option default value="desc">
          Newest
        </option>
        <option value="asc">Oldest</option>
      </select>
      {!isError && filteredProjects && (
        <ProjectsTable projects={filteredProjects} />
      )}
    </Container>
  );
};

export default FrontPage;
