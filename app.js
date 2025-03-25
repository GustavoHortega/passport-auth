const express = require('express');

const app = express();

const statusRouter = require('./routes/status');

app.use('/status', statusRouter);

app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
});