import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import css from "./AppBuffet.module.css";

export const AppBuffet = () => {
    return (
        <section className='container' >
            <div className={css.wrapper}>
                <div className={css.head}>
                    <h2 className={css.title}>Tasks</h2>
                    <TaskCounter/>
                </div>
                <div className={css.head}>
                    <h2 className={css.title}>Filter by status</h2>
                    <StatusFilter/>
                </div>
            </div>
        </section>
    )
}