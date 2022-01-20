const express = require ("express");
const bodyParser = require('body-parser')
//const db = require ("./db/index");
const routes = require('./db/routes')
const cors = require ('cors');
const app = express();

app.use(express.json());
app.use (cors())

const PORT = 3001;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


routes(app)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})





