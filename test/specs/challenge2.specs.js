var expect = require('chai').expect;
var challenge2Page = require('../pageObjects/challenge2.page');

describe('Mindera QA Graduate Challenge 2:', function () {

    beforeEach(function () {
        challenge2Page.open();
    });

    /*
        Note:
        I started by using leftClick() instead of click() but in the log while using leftClick() it was spamming the same message repeatedly. So to prevent having this warning I used click() has it does the same action to this matter.

        (You can disable this warning by setting `"deprecationWarnings": false` in your WebdriverIO config)
        WARNING: the "buttonPress" command will be deprecated soon. If you have further questions, reach out in the WebdriverIO Gitter support channel (https://gitter.im/webdriverio/webdriverio).
        Note: This command is not part of the W3C WebDriver spec and won't be supported in future versions of the driver. It is recommended to use the action command as a replacement for this.

    */



    it('Shoot all the bubbles that showed up after waiting 5 seconds', function () {
        browser.pause(5000);

        var bubbles        = challenge2Page.bubbles;        // Get all bubbles by a proper defined element
        var expected_score = challenge2Page.bubbles.length; //Count of bubbles clicked

        bubbles.forEach(function (e) { // Foreach bubble that showed up
            e.click();                 //Click on the bubble
        });

        expect(expected_score).to.be.equal(parseInt(challenge2Page.score.getText()));
    });



    //Challenge 2 - BONUS
    it('Shoot all the bubbles that show up', function () {
        var c2 = challenge2Page;
        var counter = 0;

        while (c2.bubbles_limiter > c2.score.getText()) {
            if (browser.isExisting(c2.bubble_class)) { //With .isExisting checks if element '.bulle' exists
                c2.bubble_click(); //Call the method to click on the bubble
                counter++;         //Increment the flag

                expect(counter).to.be.equal(parseInt(c2.score.getText())); //Validate the score counter
            }
        } //While to limit the test

        expect(counter).to.be.equal(parseInt(c2.score.getText()));
    });
    
});