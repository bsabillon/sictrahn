const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./configuration/database');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=> res.send('Success'));

database.connect((err) =>{
    if(!err){
        console.log('The connection to the database has been established successfully.');
    }
    else{
        console.error('Unable to connect to the database:', err);
    }

})

app.use('/usuario', require('./routes/usuarios'));
app.use('/commodity', require('./routes/commodities'));
app.use('/puerto', require('./routes/puertos'));
app.use('/cotizaciones_enc', require('./routes/cotizaciones_enc'));



app.listen(PORT, console.log(`Server started on port ${PORT}`));