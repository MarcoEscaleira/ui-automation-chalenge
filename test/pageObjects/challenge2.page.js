var page = require('./page');

var challenge2Page = Object.create(page, {

    /** define elements */
    score:           { get: function () { return $("#compteur"); } },

    bubble_class:    { get: function () { return '.bulle'; } },

    bubbles:         { get: function () { return $$(".bulle"); } },

    bubbles_limiter: { get: function () { return 5; } }, // So the test doesn't run indefinitely


    /** define page methods */
    open: { value: function () {
        page.open.call(this, 'https://mindera-qa.firebaseapp.com/bubbles/index.html');
    } },

    bubble_click: { value: function () {
        $(this.bubble_class).click();
    } }
});
module.exports = challenge2Page;