const express = require("express");
const path = require('path');
const app = express();

// MODULES CONFIG
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/themes'));

// IMPORTS
const index = require('./app/routes/index.js');
const auth = require('./app/routes/auth.js');
const helper = require('./app/helper.js');

// ROUTES
app.use('/assets', express.static('themes/' + helper.theme + '/assets')) // Assets

// Homepage
app.use('/', index); // Index
app.use('/:locale', index); // Index w/locale

// Authentication
app.use('/auth/login', auth); // Login
app.use('/auth/register', auth); // Register

if (helper.env === "debug") {
    app.listen(helper.port, function () {
        console.log("DEBUG: App has started on http://127.0.0.1:" + helper.port);
    });
} else {
    app.listen(helper.port, function () {
        console.log("OpenCS: App has started on port " + helper.port);
    });
}