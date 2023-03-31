import { useContext } from 'react';
import MainContext from '../context/MainContext';
import moment from 'moment';
import Button from './Button';
import { deleteData } from '../services/requests';

function Table() {
  const { allTasks, setAllTasks, setTasks, setIdEdit, setIsEditMode } = useContext(MainContext);
  
  const handleUpdateTask = (id) => {
    const specificTask = allTasks.filter((task) => task.id === id );
    setTasks({ ...specificTask[0] });
    setIdEdit(id);
    setIsEditMode(true);
  }

  const handleDeleteTask = (id) => {
    deleteData(`http://localhost:3000/tasks/${id}`);
    const updatedListTasks = allTasks.filter((task) => {
      return task.id !== id;
    });

    setAllTasks(updatedListTasks);
  }

  return (
    <table>
      <thead>
        <tr>
          <th className="field-title">Título</th>
          <th className="field-decription">Descrição</th>
          <th className="field-date">Data de conclusão</th>
        </tr>
      </thead>
      <tbody>
        { allTasks.map((task) => (
          <tr key={ task.id }>
            <td>{ task.title }</td>
            <td>{ task.description }</td>
            <td>{ moment(task.doneDate).format('l') }</td>
            <td><Button name='Editar' callback={()=> handleUpdateTask(task.id) }/></td>
            <td><Button name='Deletar' callback={()=> handleDeleteTask(task.id) }/></td>
          </tr>
        ))}
      </tbody>     
    </table>
  )
}

export default Table