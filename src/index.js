// Npms
import express from 'express';
// Files
import routs from './routes/cards.routes.js';
import indexroutes from './routes/index.routes.js';
// Server const
const app = express();
const port = 2002

app.use(express.json());

app.use(routs);
app.use(indexroutes);

app.listen(port);
console.log('listening on port' + port);