const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "106.109.32.201",
  user: "cargo",
  database: "innovation",
  password: "cargo123"
});
connection.connect(function(err){
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

connection.query("SELECT * FROM `EXPORT_FROM_INSIZE`",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    // console.log(fields); // мета-данные полей
  });
connection.end();

export {
  connection
}
