import React, { ChangeEvent, FormEvent }  from 'react';
import Input from '../../Components/Input';

interface FormProps {
  onSubmit: (event: FormEvent) => void
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
  taskInput: string
}

const Form: React.FC<FormProps> = ({ onSubmit, onChangeInput, taskInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="task"
        placeholder="Digite uma nova tarefa"
        onChange={onChangeInput}
        value={taskInput}
      />
      <button type="submit">Criar tarefa</button>
    </form>
  )
}

export default Form;
