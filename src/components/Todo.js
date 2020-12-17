import React from 'react';

const Todo = ({text, todo, setTodos, todos}) =>{

    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="done">ok</button>
            <button onClick={deleteHandler} className="trash">x</button>
        </div>
    );
}

export default Todo;