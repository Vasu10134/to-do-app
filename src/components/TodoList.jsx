import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  // ✅ Send full list of selected IDs
  const handleDeleteSelected = () => {
    onDelete(selected);
    setSelected([]);
  };

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onSelect={handleSelect}
            isSelected={selected.includes(todo.id)}
            onEdit={onEdit}
          />
        ))}
      </ul>
      {selected.length > 0 && (
        <button onClick={handleDeleteSelected}>
          🧹 Delete Selected ({selected.length})
        </button>
      )}
    </>
  );
};

export default TodoList;
