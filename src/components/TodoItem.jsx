import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onSelect, isSelected, onEdit }) => {
  return (
    <li className="todo-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* ✅ Multi-select checkbox */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onSelect(todo.id)}
        title="Select for bulk delete"
      />

      {/* 📝 Task Text */}
      <span
        className={todo.completed ? 'completed' : ''}
        style={{ flex: 1 }}
      >
        {todo.text}
      </span>

      {/* ✅ Completion toggle box */}
      <div
        onClick={() => onToggle(todo.id)}
        style={{
          cursor: 'pointer',
          padding: '4px 8px',
          borderRadius: '5px',
          backgroundColor: todo.completed ? '#28a745' : '#ffc107',
          color: '#fff',
          fontSize: '12px',
          userSelect: 'none'
        }}
        title="Toggle task status"
      >
        {todo.completed ? 'Complete' : 'Incomplete'}
      </div>

      {/* ✏️ Edit + 🗑️ Delete */}
      <button onClick={() => onEdit(todo)} title="Edit Task">✏️</button>
      <button onClick={() => onDelete(todo.id)} title="Delete Task">🗑️</button>
    </li>
  );
};

export default TodoItem;
