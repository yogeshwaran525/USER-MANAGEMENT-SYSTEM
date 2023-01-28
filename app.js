const express = require('express');
const exphbs = require('express-handlebars'); 
//const bodyParser = require('body-parser');  

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Parsing middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// hbs view engine
const handlebars = exphbs.create({ extname: 'hbs',});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

 
const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));