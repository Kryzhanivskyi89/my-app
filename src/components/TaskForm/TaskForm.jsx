import css from './TaskForm.module.css'
import {Button} from './../Button/Button'

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { addTask } from "../../redux/todo/actions";

export const TaskForm = () => {

  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // Викликаємо генератор екшену та передаємо текст завдання для поля payload
        // Відправляємо результат – екшен створення завдання
        dispatch(addTask(form.elements.text.value));
        form.reset();
    }

  return (
    <section className='container'>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </form>

    </section>
  );
}