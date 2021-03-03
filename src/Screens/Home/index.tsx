import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { TaskListContext } from '../../contexts/taskList.context';
import Form from '../../Components/Form';
import TaskList from '../../Components/TaskList';

const Home: React.FC = () => {
  const tasks = useContext(TaskListContext);
  const [taskInput, setTaskInput] = useState<string>("");

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    setTaskInput(event.target.value)
  }

  function handleSubmitForm(event: FormEvent): void {
    event.preventDefault();
    tasks.addToList(taskInput);
    setTaskInput("")
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmitForm}
        onChangeInput={handleChangeInput}
        taskInput={taskInput}
      />
      <TaskList/>
    </div>
  )
}

export default Home;
