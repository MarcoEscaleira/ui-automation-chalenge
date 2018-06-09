var expect = require('chai').expect;
var challenge2Page = require('../pageObjects/challenge2.page');

describe('Mindera QA Graduate Challenge 2:', function () {

    beforeEach(function () {
        challenge2Page.open();
    });

    
    
    it('Shoot all the bubbles that showed up after waiting 5 seconds', function () {
        browser.pause(5000);

        var c2 = challenge2Page;

        var get_length = c2.bubbles.length;

        c2.bubbles.forEach(function (e) { // Foreach bubble that showed up
            e.click();                    //Click on the bubble
        });

        expect(get_length).to.be.equal(parseInt(challenge2Page.score.getText()));
    });



    //Challenge 2 - BONUS
    it('Shoot all the bubbles that show up', function () {
        var c2 = challenge2Page;

        while (c2.bubbles_limiter > c2.score.getText()) {
            if (browser.isExisting(c2.bubble_class)) {                       //With .isExisting checks if element '.bulle' exists
                c2.bubble_click();                                           //Call the method to click on the bubble
                c2.inc();                                                    //Increment the flag

                expect(c2.count).to.be.equal(parseInt(c2.score.getText()));  //Validate the score counter
            }
        } //While to limit the test

        expect(c2.count).to.be.equal(parseInt(c2.score.getText()));
    });
    
});