import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTask = (text) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const toggleTask = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "todo-app dark" : "todo-app"}>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <h1>Todo App</h1>
            <TodoInput addTask={addTask} />
            <TodoList
                todos={todos}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />
        </div>
    );
};

export default App;