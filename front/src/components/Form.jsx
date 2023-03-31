
import { useContext } from 'react';
import MainContext from '../context/MainContext';
import { postData } from '../services/requests';

function Form(){
    const { tasks, setTasks } = useContext(MainContext);
    
    const handleChange = ({ target: { value, name } }) => {
      setTasks((prev) => ({ ...prev, [name]: value }));
    };

    const handleClickAdd = async (e) => {
      await postData('http://localhost:3000/tasks', tasks)
    };

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
              onChange={ handleChange }
              
            />
          <label>Descrição:</label>
            <input
              className="description"
              type="text"
              name="description"
              id="description"
              onChange={ handleChange }
              
            />

          <label>Data de conclusão:</label>   
            <input
              className="done-date"
              name="doneDate"
              type="text"
              id="date"
              placeholder='AAAA-MM-DD'
              onChange={ handleChange }
              
            />
        
          <div className="task-form-buttons">
            <button
              data-testid="insert-task-btn"
              onClick={ handleClickAdd }
            >
              Salvar
            </button>
          </div>
  
        </form>
    </section>
    )
}

export default Form;