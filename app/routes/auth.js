const express = require('express');
const router = express.Router();

const helper = require("../helper")

router.get('/auth/login', function (req, res) {
    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: helper.getLocale(localeVar).login,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/login", vars);
});


module.exports = router;