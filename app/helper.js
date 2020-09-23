const fs = require('fs');
const dotenv = require("dotenv");
const colors = require('colors');
colors.enable();
dotenv.config()

//=====================
// APP SETTINGS
//=====================
const env = process.env.APP_ENV || "production"
const theme = process.env.APP_THEME || "opencs"
const locale = process.env.APP_LOCALE || "en"
const port = process.env.APP_PORT || "80"
const companyName = process.env.COMPANY_NAME || "OpenCS"
const companyEmail = process.env.COMPANY_EMAIL || "email@email.com"
const companyKey = process.env.COMPANY_KEY || "dear-petars-teacher-i-promise-im-not-racist-like-him"
if (companyKey === "") {
    log("error", "Company Key is empty!");
}
const year = new Date().getFullYear()

// Get locale file
function getLocale(locale) {
    const file = __dirname + "/lang/" + locale + ".json";
    if (fs.existsSync(file)) {
        const lang = fs.readFileSync(file);
        return JSON.parse(lang)
    } else {
        const file = __dirname + "/lang/en.json";
        const lang = fs.readFileSync(file);
        return JSON.parse(lang)
    }
}

function log(type, log) {
    const entry = "OpenCS".red.bold + " -> ".gray;
    switch (type) {
        case "error":
            console.log(entry + "ERROR:".bgRed + " " + log.white);
            break;
        case "warning":
            console.log(entry + "WARNING: ".bgYellow + log.white);
            break;
        case "success":
            console.log(entry + "SUCCESS: ".bgGreen + log.white);
            break;
        case "info":
            console.log(entry + "INFO: ".bgWhite + log.white);
            break;
    }
}

// EXPORTS
module.exports = {
    env,
    theme,
    locale,
    port,
    companyName,
    companyEmail,
    companyKey,
    year,
    log,
    getLocale
}