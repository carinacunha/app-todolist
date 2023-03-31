const express = require('express'); 
const taskDB = require('../db/taskDB');

const router = express.Router(); 

router.get('/', async (_req, res) => {
  try {
    const [result] = await taskDB.getAll();
    if(result){
      res.status(201).json(result);
    } else {
      res.status(404).json({ message: 'Não existe tarefa cadastrada'})
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
  }
)

router.post('/', async (req, res) => {
  const task = req.body;
  try {
    const result = await taskDB.insert(task);
    res.status(201).json({
      message: `Tarefa cadastrada com sucesso` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/task/:id', async (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const newTask = req.body;
  try {
    const result = await taskDB.update(idNumber, newTask);
    res.status(201).json({
      message: `Tarefa atualizada com sucesso` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar a tarefa' });
  }
});

router.delete('/task/:id', async (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  try {
    const result = await taskDB.deleteTask(idNumber);
    res.status(201).json({
      message: `Tarefa deletada com sucesso` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao tentar deletar a tarefa' });
  }
});

module.exports = router;