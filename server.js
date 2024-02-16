// Dependencies
const express = require('express');
const path = require('path');

// Import express-session & express-handlebars
const session = require('express-session');
const exphbs = require('express-handlebars');

// import connection and controllers/index.js
const routes = require('./controllers/index.js');
const sequelize = require('./config/connection');

// Sets up the Express App & port
const app = express();
const PORT = process.env.PORT || 3001;

// Use sessions & pass sess object 
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};
app.use(session(sess));

// create handlebars engine and use as the view engine
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use express.json, express.urlencoded and static public files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(routes);


// Starts the server to begin listening and connects app to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });


// app.listen(PORT, () => {
//   console.log('Server running on: ' + PORT);
// });