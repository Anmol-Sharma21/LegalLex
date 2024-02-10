import express from 'express';
import db from './database/db';


const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { 
    res.send('Listening');
})



app.listen(PORT, () => {
    console.log('listening on port 3000');
})

db(); // Connect to the database