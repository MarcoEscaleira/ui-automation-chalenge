var page = require('./page');

var challenge3Page = Object.create(page, {

    /** define elements */
    name        : { get: function () { return $("#name");                       } },

    email       : { get: function () { return $("#email");                      } },

    password    : { get: function () { return $$("#password");                  } },

    country     : { get: function () { return $("select[name='profession']");   } }, //should be named 'country' and doesn´t have an ID

    language    : { get: function () { return $("#language");                   } },

    terms       : { get: function () { return $("#terms");                      } },

    newsletter  : { get: function () { return $("#newsletter");                 } },

    submitBtn   : { get: function () { return $("button[type='submit']");       } },


    /** define page methods */
    open: { value: function () {
        page.open.call(this, 'https://qatools.mindera.com/buggy.html#/');
    } },

    alert_action: { value: function () {
        if (browser.alertText())
            browser.alertDismiss();
    } },

    submit: { value: function () {
        this.submitBtn.click();
    } }
    
});
module.exports = challenge3Page;