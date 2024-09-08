import TodoItem from "../TodoItem"
import { useState } from 'react';
import styles from "./todoList.module.css"

export default function TodoList() {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState("")

    function addTask(event) {
        event.preventDefault()
        setTaskList([...taskList, newTask]);
        setNewTask("");
    }

    return (
        <div>
            <h1>
                To Do List
            </h1>

            <form onSubmit={(event) => addTask(event)}>
                <input
                    placeholder="Tarefa"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)} />
                <button type="submit">Salvar</button>
            </form>

            <ul>
                {taskList.map((task, index) => (
                    <TodoItem key={index} task={task} />
                ))}
            </ul>

        </div>
    )
}