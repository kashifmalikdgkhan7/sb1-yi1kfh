import React, { useState, useEffect } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';

interface TimeTrackerProps {
  darkMode: boolean;
}

const TimeTracker: React.FC<TimeTrackerProps> = ({ darkMode }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h4 className="text-xl font-semibold mb-4">Time Tracker</h4>
      <div className="text-4xl font-bold text-center mb-4">{formatTime(time)}</div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-md ${
            isRunning
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-green-500 hover:bg-green-600'
          } text-white focus:outline-none`}
        >
          {isRunning ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
          className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white focus:outline-none"
        >
          <StopCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;