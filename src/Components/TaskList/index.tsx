import React, {useContext} from 'react';
import { TaskListContext } from '../../contexts/taskList.context';

import ListItem from '../ListItem';

const TaskList: React.FC = () => {
  const { taskList } = useContext(TaskListContext);

  return (
    <ul>
      {taskList.map((text, index) => <ListItem key={index} text={text} />)}
    </ul>
  )
}

export default TaskList
