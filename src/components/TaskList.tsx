import React from 'react';
import { CheckCircle, Circle, PlusCircle } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Complete project proposal', completed: true },
  { id: 2, title: 'Design new landing page', completed: false },
  { id: 3, title: 'Review team performance', completed: false },
  { id: 4, title: 'Update client documentation', completed: false },
];

interface TaskListProps {
  darkMode: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ darkMode }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h4 className="text-xl font-semibold mb-4">Tasks</h4>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <button className={`mr-2 ${task.completed ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'} hover:text-indigo-600 focus:outline-none`}>
              {task.completed ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </button>
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : darkMode ? 'text-white' : 'text-gray-700'}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
        <PlusCircle className="w-5 h-5 mr-1" />
        Add new task
      </button>
    </div>
  );
};

export default TaskList;