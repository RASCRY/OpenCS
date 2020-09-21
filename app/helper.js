const fs = require('fs');
const dotenv = require("dotenv");
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

function getCategories() {
    let categories = {
        "1": "minecraft",
        "2": "vps",
        "3": "web",
    };

    for(var category in categories){
        console.log(category[1]);
        return category
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
    year,
    getCategories,
    getLocale
}