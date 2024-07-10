import React from 'react';
import PropTypes from 'prop-types';
import './css/Logbook.css';

const Logbook = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    // 模拟请求
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="logbook-container">
      <h1 className="logbook-title">Daily Log</h1>
      <ul className="task-list">
        {React.Children.map(children, (child, index) => {
          if (child.type === TaskItem) {
            return React.cloneElement(child, { key: index });
          }
          return null;
        })}
        {tasks.map((task, index) => (
          <TaskItem key={index} isComplete={task.completed}>
            {task.title}
          </TaskItem>
        ))}
      </ul>
    </div>
  );
};

const TaskItem = ({ children, isComplete }) => {
  return (
    <li className={`task-item ${isComplete ? 'completed' : ''}`}>
      <input type="checkbox" checked={isComplete} readOnly />
      {children}
    </li>
  );
};

TaskItem.propTypes = {
  isComplete: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Logbook.TaskItem = TaskItem;

export default Logbook;
