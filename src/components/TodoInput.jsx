import React, { useState, useEffect } from 'react';

const TodoInput = ({ addTask, editTask, taskToEdit }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (taskToEdit) setInput(taskToEdit.text);
  }, [taskToEdit]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    taskToEdit ? editTask(taskToEdit.id, input) : addTask(input);
    setInput('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={taskToEdit ? 'Edit task...' : 'Add task'}
      />
      <button type="submit">{taskToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoInput;


// xyz
