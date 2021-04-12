import moment from "moment";
import { nullString, parsedDateFormat } from "./constants";

const isValueDate = (val) =>
  typeof val === "string" && new Date(val).getTime() > 0;
const isValueNull = (val) =>
  (typeof val === "string" && val.toLowerCase() === nullString) || null;

export const capitalizeFirstLetter = (s) =>
  s.length > 1 ? s.charAt(0).toUpperCase() + s.slice(1) : s;

export const parseTableValue = (val) =>
  isValueDate(val) ? formatTimeStamp(val) : isValueNull(val) ? null : val;

export const formatTimeStamp = (timestamp) =>
  moment(timestamp).format(parsedDateFormat);

export const sortByStartDate = (list, direction) => {
  let sorted = [];
  if (direction === "asc") {
    sorted = list.sort(
      (a, b) => new Date(a["start date"]) - new Date(b["start date"])
    );
  } else if (direction === "desc") {
    sorted = list.sort(
      (a, b) => new Date(b["start date"]) - new Date(a["start date"])
    );
  }
  return sorted;
};
