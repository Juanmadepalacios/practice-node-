const express = require("express");
const path = requiere('path');
const exphbs = requiere('express-handlebars');

// Initiliazations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join (__dirname, 'views'));
app.engine('.hbs', exphbs() )

//Middlewares

// Global Variables

// Routes

// Static Files

//Server is listenning
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
