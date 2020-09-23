const express = require('express');
const router = express.Router();

const helper = require("../helper")

router.get('/order/all', function (req, res) {
    const localeVar = req.query.locale || helper.locale;

    const vars = {
        page_title: helper.getLocale(localeVar).clientArea,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/order/all", vars);
});

router.get('/order/:category', function (req, res) {
    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: capitalizeWord(req.params.category),
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/order/category", vars);
});

function capitalizeWord(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = router;