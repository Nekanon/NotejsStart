const PostgreClient    = require('pg').Pool;
const pool = new PostgreClient({
    user: 'postgres',
    host: 'localhost',
    database: 'NodeJSStart',
    password: 'postgres',
    port: 5432,
  })
  PostgresClient.connect(pool.host, (err, database) => {
    if (err) return console.log(err)
    require('./routes/index')()
  });