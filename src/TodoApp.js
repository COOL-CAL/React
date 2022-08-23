import { useState } from "react";

export default function TodoApp() {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(todo === '') { return; }
        setTodoList(preVal => [todo, ...preVal]);
        console.log(todo);
        setTodo('');
    }
    return (
        <div>
            <h1>My Todo List</h1>
                <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Write your to do..."
                    value={ todo }
                    onChange={ onChange }
                />
                <button>Add To do</button>
            </form>
            <ul>
                { todoList.map((item, idx) => (<li key={ idx }> { item } </li>)) }
            </ul>
        </div>
    ) 
}