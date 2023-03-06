const app = require("./app");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
//Creating the connection
const db = mysql.createConnection({
  //host
  //user
  //pass
});

//connect

db.connect((err) => {

});

const port = 5000;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
