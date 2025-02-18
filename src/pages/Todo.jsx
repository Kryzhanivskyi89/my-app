
import { AppBuffet } from "../components/AppBuffet/AppBuffet";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { TaskList } from "../components/TaskList/TaskList";



export const Todo = () => {
  return (
    <>
      <AppBuffet />
      <TaskForm />
      <TaskList />
    </>
  )
}