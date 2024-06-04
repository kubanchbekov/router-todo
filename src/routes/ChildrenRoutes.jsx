import AddPaga from "../components/AddPaga";
import EditPaga from "../components/EditPaga";
import TabliPaga from "../components/TabliPaga";

export const CHILDREN_ROUTES = [
  { path: "/", element: <TabliPaga /> },
  { path: "/addTodo", element: <AddPaga /> },
  { path: `/editPage/:id`, element: <EditPaga /> },
];
