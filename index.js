const express = require('express');
const app = express();
const port = 3003;

const testRoutes = require('./router.js');

console.log(routes);

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/business', testRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));