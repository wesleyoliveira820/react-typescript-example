import React, { createContext, useState } from 'react';

type TaskProps = {
  taskList: string[],
  addToList: (text: string) => void
}

export const TaskListContext = createContext<TaskProps>({
  taskList: [],
  addToList: () => {}
});

const TaskListProvider: React.FC = ({ children }) => {
  const [taskList, setTaskList] = useState<string[]>([]);

  function addToList(text: string): void {
    setTaskList([...taskList, text])
  }

  return (
    <TaskListContext.Provider value={{ taskList, addToList }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider;
