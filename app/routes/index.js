const express = require('express');
const router = express.Router();

const helper = require("../helper");

router.get('/', function (req, res) {
    const localeVar = req.query.locale || helper.locale;

    const vars = {
        page_title: helper.getLocale(localeVar).home,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/index", vars);
});


module.exports = router;