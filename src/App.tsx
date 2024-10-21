import React, { useState, useEffect } from 'react';
import { Clock, BarChart2, CheckCircle, PlusCircle, Menu, Bell, User, Moon, Sun } from 'lucide-react';
import TaskList from './components/TaskList';
import TimeTracker from './components/TimeTracker';
import ProductivityChart from './components/ProductivityChart';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200`}>
      {/* Sidebar */}
      <aside className={`bg-indigo-700 dark:bg-indigo-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <h1 className="text-2xl font-semibold text-center">TaskMaster</h1>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800 dark:hover:bg-indigo-700 hover:text-white">
            Dashboard
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800 dark:hover:bg-indigo-700 hover:text-white">
            Projects
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800 dark:hover:bg-indigo-700 hover:text-white">
            Calendar
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800 dark:hover:bg-indigo-700 hover:text-white">
            Reports
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="flex items-center justify-between p-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 dark:text-gray-400 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 md:hidden">
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="text-gray-500 dark:text-gray-400 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button className="text-gray-500 dark:text-gray-400 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300">
                <Bell size={24} />
              </button>
              <button className="flex items-center text-gray-700 dark:text-gray-300 focus:outline-none">
                <User size={24} className="mr-2" />
                <span>John Doe</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-semibold">Dashboard</h3>
            
            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-4 py-6 flex items-center">
                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75 text-white mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Tasks Completed</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">23/30</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-4 py-6 flex items-center">
                <div className="p-3 rounded-full bg-green-600 bg-opacity-75 text-white mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Hours Tracked</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">37.5</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-4 py-6 flex items-center">
                <div className="p-3 rounded-full bg-yellow-600 bg-opacity-75 text-white mr-4">
                  <BarChart2 size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Productivity Score</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">85%</p>
                </div>
              </div>
            </div>

            {/* Task List and Time Tracker */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TaskList darkMode={darkMode} />
              <TimeTracker darkMode={darkMode} />
            </div>

            {/* Productivity Chart */}
            <div className="mt-8">
              <ProductivityChart darkMode={darkMode} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;