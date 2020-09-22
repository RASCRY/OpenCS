const express = require('express');
const router = express.Router();

const helper = require("../helper")

router.get('/clientarea', function (req, res) {
    if(!req.user) { res.redirect("/auth/login"); return; }

    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: helper.getLocale(localeVar).clientArea,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/login", vars);
});

router.get('/clientarea/:page', function (req, res) {
    if(!req.user) { res.redirect("/auth/login"); return; }

    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: helper.getLocale(localeVar)[req.params.page],
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/clientarea/"+req.params.page, vars);
});


module.exports = router;