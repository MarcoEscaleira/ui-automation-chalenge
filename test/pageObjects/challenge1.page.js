var page = require('./page');

var challenge1Page = Object.create(page, {

    /** elements */
    peopleAndCulture  : { get: function () { return $("a.ui-button.ui-button-default");            } },

    peopleAndCulture2 : { get: function () { return $("#quote>.section-footer>a");                 } }, // BONUS

    contactCity       : { get: function () { return $("div:nth-child(2)>div.footer-contact-city"); } },

    jobList           : { get: function () { return $("a.jobs-item:last-child");                   } },

    url               : { get: function () { return browser.getUrl();                              } },

    /** methods */
    open: { value: function () {
        page.open.call(this, "https://www.mindera.com/");
    } }

});
module.exports = challenge1Page;