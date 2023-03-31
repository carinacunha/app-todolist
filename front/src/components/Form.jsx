import React, {  useContext } from 'react';
import MainContext from '../context/MainContext';

function Form(){
    const { tasks, setTasks } = useContext(MainContext);

    const handleChange = ({ target: { value, name } }) => {
      setTasks((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <section className="task-section">
        <form className="task-form">
        <p>Cadastre sua tarefa</p>
          <label for="title">Título:</label>
            <input
              className="title"
              type="title"
              name="title"
              id="title"
              onChange={ handleChange }
              
            />
          <label for="description">Descrição:</label>
            <input
              className="description"
              type="description"
              name="description"
              id="description"
              onChange={ handleChange }
              
            />

          <label for="date">Data de conclusão:</label>   
            <input
              className="data-finished"
              type="data-finished"
              name="data-finished"
              id="date"
              placeholder='AAAA-MM-DD'
              onChange={ handleChange }
              
            />
        
          <div className="task-form-buttons">
            <button
              data-testid="insert-task-btn"
            >
              Salvar
            </button>
          </div>
          <table>
            <thread>
            <th className="field-title">Título</th>
            <th className="field-decription">Descrição</th>
            <th className="field-date">Data de conclusão</th>
            </thread>
          </table>
        </form>
    </section>
    )
}

export default Form;