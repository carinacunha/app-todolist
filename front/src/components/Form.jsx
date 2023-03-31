import React, { Component } from 'react'

export default class Form extends Component {
  render() {
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
              
            />
          <label for="description">Descrição:</label>
            <input
              className="description"
              type="description"
              name="description"
              id="description"
              
            />

          <label for="date">Data de conclusão:</label>   
            <input
              className="data-finished"
              type="data-finished"
              name="data-finished"
              id="date"
              
            />
        
          <div className="task-form-buttons">
            <button
              data-testid="insert-task-btn"
            >
              Salvar
            </button>
          </div>
        </form>
    </section>
    )
  }
}
