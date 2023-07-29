import React, { useState } from 'react';
import { Task1 } from '../../tasks/Task_1';
import { Task2 } from '../../tasks/Task_2';
import { Task3 } from '../../tasks/Task_3';
import { Task4 } from '../../tasks/Task_4';
import { Task5 } from '../../tasks/Task_5';
import { Task6 } from '../../tasks/Task_6';
import { Task7 } from '../../tasks/Task_7';
import { Task8 } from '../../tasks/Task_8';

export const Home = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const renderSelectedTask = () => {
    switch (selectedTask) {
      case 'task1':
        return <Task1 />;
      case 'task2':
        return <Task2 />;
      case 'task3':
        return <Task3 />;
      case 'task4':
        return <Task4 />;
      case 'task5':
        return <Task5 />;
      case 'task6':
        return <Task6 />;
      case 'task7':
        return <Task7 />;
      case 'task8':
        return <Task8 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Task Selector</h1>
      <div>
        <button onClick={() => setSelectedTask('task1')}>Task 1</button>
        <button onClick={() => setSelectedTask('task2')}>Task 2</button>
        <button onClick={() => setSelectedTask('task3')}>Task 3</button>
        <button onClick={() => setSelectedTask('task4')}>Task 4</button>
        <button onClick={() => setSelectedTask('task5')}>Task 5</button>
        <button onClick={() => setSelectedTask('task6')}>Task 6</button>
        <button onClick={() => setSelectedTask('task7')}>Task 7</button>
        <button onClick={() => setSelectedTask('task8')}>Task 8</button>
      </div>
      {renderSelectedTask()}
    </div>
  );
};
