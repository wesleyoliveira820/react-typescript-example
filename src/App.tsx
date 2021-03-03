import React from 'react';
import TaskListProvider from './contexts/taskList.context';
import HomeScreen from './Screens/Home';

const App: React.FC = () => {
  return (
    <TaskListProvider>
      <HomeScreen />
    </TaskListProvider>
  )
}

export default App;
