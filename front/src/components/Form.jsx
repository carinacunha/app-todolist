import { useContext } from 'react';
import MainContext from '../context/MainContext';
import { postData,  putData } from '../services/requests';
import moment from 'moment';

function Form(){
    const { tasks, setTasks, setAllTasks, allTasks, isEditMode, setIsEditMode, idEdit } = useContext(MainContext);
    
    const handleChange = ({ target: { value, name } }) => {
      setTasks((prev) => ({ ...prev, [name]: value }));
    };

    const handleClickAdd = async () => {
      await postData('http://localhost:3000/tasks', tasks);
      setAllTasks((prev) => ([ ...prev, tasks ]));
      setTasks({
        title: '',
        description: '',
        doneDate: '',
      });
    };

    const handleClickUpdate = async () => {
      tasks.doneDate = moment(tasks.doneDate).format('YYYY-MM-DD');
      await putData(`http://localhost:3000/tasks/${idEdit}`, tasks);
      const updatedTasks = allTasks.reduce((acc, curr) => {
        if (curr.id === idEdit){
          curr = tasks;
        }
        acc.push(curr);
          return acc;
      }, []);

      setAllTasks(updatedTasks);
      setTasks({
        title: '',
        description: '',
        doneDate: '',
      });
      setIsEditMode(false);
    }

    return (
      <section className="task-section">
        <form className="task-form"
          onSubmit={ (event)=>  event.preventDefault() }
        >
        <p>Cadastre sua tarefa</p>
          <label>Título:</label>
            <input
              className="title"
              type="text"
              name="title"
              id="title"
              value={ tasks.title }
              onChange={ handleChange }
              
            />
          <label>Descrição:</label>
            <input
              className="description"
              type="text"
              name="description"
              id="description"
              value={ tasks.description }
              onChange={ handleChange }
              
            />

          <label>Data de conclusão:</label>   
            <input
              className="done-date"
              name="doneDate"
              type="text"
              id="date"
              value={ tasks.doneDate }
              placeholder='AAAA-MM-DD'
              onChange={ handleChange }
            />
        
          <div className="task-form-buttons">
            {
              isEditMode ? (
                <button
                data-testid="insert-task-btn"
                onClick={ handleClickUpdate }
              >
                Salvar edição
              </button>
              ) :(
                <button
                data-testid="insert-task-btn"
                onClick={ handleClickAdd }
              >
                Salvar
              </button>
              )
            }

          </div>
  
        </form>
    </section>
    )
}

export default Form;