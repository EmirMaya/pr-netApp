const server = require("./src/app.js");
const { conn } = require("./src/db.js");

require("dotenv").config();

const PORT = process.env.PORT;

conn.sync({ force: false }).then(() => { 
  server.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
  });
});