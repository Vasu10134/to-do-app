import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [taskToEdit, setTaskToEdit] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTask = (text) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const editTask = (id, newText) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
        setTaskToEdit(null);
    };

    const toggleTask = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // ✅ Modified to accept single or multiple IDs
    const deleteTask = (ids) => {
        if (Array.isArray(ids)) {
            setTodos(todos.filter(todo => !ids.includes(todo.id)));
        } else {
            setTodos(todos.filter(todo => todo.id !== ids));
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "todo-app dark" : "todo-app"}>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <h1>Todo App</h1>

            <TodoInput
                addTask={addTask}
                editTask={editTask}
                taskToEdit={taskToEdit}
            />

            <TodoList
                todos={todos}
                onToggle={toggleTask}
                onDelete={deleteTask} // ✅ handles both single + multiple now
                onEdit={(todo) => setTaskToEdit(todo)}
            />
        </div>
    );
};

export default App;
