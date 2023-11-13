import { List } from "@mui/material";
import ListWithDelete from "../components/list_with_delete";

const fetchCourses = async () => {
  try {
    const courses = await fetch("localhost:8008/course/paginate", {
      method: "get",
    });

    const response: Record<string, unknown>[] = await courses.json();

    return response;
  } catch (err) {
    console.log("error fetching courses");
    return null;
  }
};

function Grades() {
  return (
    <List>
      <ListWithDelete />
    </List>
  );
}

export default Grades;
