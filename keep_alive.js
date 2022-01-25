const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Notebot is Alive!'));

app.listen(port, () => console.log(`Notebot is listening to http://localhost:${port}`));