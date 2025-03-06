import { useSelector } from "react-redux";

import { statusFilters } from '../../../redux/todo/constants'
import { getTasks, getStatusFilter } from "../../../redux/todo/selectors";
import { Task } from "../Task/Task"
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  
  return (
    <section className='container'>
      <ul className={css.list}>
        {visibleTasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </section>
  )    
}
