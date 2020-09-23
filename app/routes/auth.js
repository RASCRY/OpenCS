const express = require('express');
const router = express.Router();

const helper = require("../helper");

router.get('/auth/login', function (req, res) {
    const localeVar = req.query.locale || helper.locale;

    if(req.user) { res.redirect("/clientarea/?locale="+localeVar); return; }

    const vars = {
        page_title: helper.getLocale(localeVar).login,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/auth/login", vars);
});

router.get('/auth/register', function (req, res) {
    const localeVar = req.query.locale || helper.locale;

    if(req.user) { res.redirect("/clientarea/?locale="+localeVar); return; }

    const vars = {
        page_title: helper.getLocale(localeVar).register,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/auth/register", vars);
});

router.get('/auth/reset', function(req, res) {
    const localeVar = req.query.locale || helper.locale;

    if(req.user) { res.redirect("/clientarea/?locale="+localeVar); return; }

    const vars = {
        page_title: helper.getLocale(localeVar).register,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/auth/reset", vars);
});


module.exports = router;