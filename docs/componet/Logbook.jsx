import React from 'react';
import PropTypes from 'prop-types';
import './css/Logbook.css';

const Logbook = ({ children, describe }) => {
  return (
    <div className="logbook-container">
      <h1 className="logbook-title">{describe ? describe : 'Daily Log'}</h1>
      <ul className="task-list">
        {React.Children.map(children, (child, index) => {
          if (child.type === TaskItem) {
            return React.cloneElement(child, { key: index });
          }
          return null;
        })}
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