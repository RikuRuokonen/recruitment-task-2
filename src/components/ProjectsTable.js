import { capitalizeFirstLetter, parseTableValue } from "../utils/helpers";
import styled from "styled-components";

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #dedede;
  }
`;

const TableCell = styled.td`
  padding: 4px 20px;
  white-space: nowrap;
  width: auto;
  overflow: auto;
`;

const getTableHeader = (project) => (
  <TableRow>
    {Object.keys(project).map((key) => (
      <TableCell>{capitalizeFirstLetter(key)}</TableCell>
    ))}
  </TableRow>
);

const getTableRow = (project) => (
  <TableRow>
    {Object.values(project).map((val) => (
      <TableCell>{parseTableValue(val)}</TableCell>
    ))}
  </TableRow>
);

const ProjectsTable = ({ projects }) => (
  <Table>
    {getTableHeader(projects[0] || [])}
    {projects.map((projects) => getTableRow(projects))}
  </Table>
);

export default ProjectsTable;
