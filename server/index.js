const Express = require('express');
const cors = require("cors");
const router = require("./router");

const app = new Express();

app.use(cors());
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
})