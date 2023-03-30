const app = require('./app'); 
const connection = require('./src/db/connection');

const port = 3000; //

app.listen(port, async () => { 
  console.log(`API todolist está sendo executada na porta ${port}`);

});