
const conn = require('./connection'); 

const insert = (task) => conn.execute( 
    `INSERT INTO todolist.tasks 
      (title, description, doneDate) VALUES (?, ?, ?)`,
    [task.title, task.description, task.doneDate], 
)

const getAll = () => conn.execute( 
  `SELECT * FROM todolist.tasks;`,
)

const update = (id, newTask) => conn.execute(
    `UPDATE todolist.tasks 
      SET title = ?, description = ?, doneDate = ?
      WHERE id = ? `, [newTask.title, newTask.description, newTask.doneDate, id]
);

const deleteTask = (id) => conn.execute(
  `DELETE FROM todolist.tasks WHERE id = ? `, [id]
  );

module.exports = {
  insert,
  getAll,
  update,
  deleteTask
};