
import { AppBuffet } from "../components/tasks/AppBuffet/AppBuffet";
import { TaskForm } from "../components/tasks/TaskForm/TaskForm";
import { TaskList } from "../components/tasks/TaskList/TaskList";



export const Todo = () => {
  return (
    <section>
      <div className='container'>
        <AppBuffet />
        <TaskForm />
        <TaskList />
      </div>
    </section>
  )
}