let express = require('express');
let app = express();
let port = 3003;

let testRoutes = require('./router.js');

console.log(routes);

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/business', testRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));