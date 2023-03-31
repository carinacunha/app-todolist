const app = require('./app'); 
const connection = require('./db/connection');

const port = 3001; //

app.listen(port, async () => { 
  console.log(`API todolist está sendo executada na porta ${port}`);

  const [ result ] = await connection.execute('SELECT 1'); //realiza a conexão com o MySQL
  if (result) {
    console.log('MySQL connection OK');
  }
});