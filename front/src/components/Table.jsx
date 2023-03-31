import { useContext } from 'react';
import MainContext from '../context/MainContext';
import moment from 'moment';

function Table() {

  const { allTasks } = useContext(MainContext);

  return (
    <table>
      <thread>
        <th className="field-title">Título</th>
        <th className="field-decription">Descrição</th>
        <th className="field-date">Data de conclusão</th>
      <tbody>
        { allTasks.map((task) => (
          <tr>
            <td>{ task.title }</td>
            <td>{ task.description }</td>
            <td>{ moment(task.doneDate).format('l') }</td>
          </tr>
        ))}
      </tbody>
            
      </thread>
    </table>
  )
}

export default Table