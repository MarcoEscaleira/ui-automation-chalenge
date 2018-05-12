var expect = require('chai').expect;
var challenge1Page = require('../pageObjects/challenge1.page');

describe('Mindera QA Graduate Challenge 1:', function () {
    beforeEach(function () {
        challenge1Page.open();
    });

    describe('Mindera QA Graduate Challenge 1.1 :', function () {
        it('You must click on the People&Culture button in order to make the test pass', function () {
            //Click on the button
            challenge1Page.peopleAndCulture.click();

            //Delete 'www' from url
            expect(browser.getUrl()).to.be.equal("https://mindera.com/people-and-culture/");
        });
    });

    describe('Mindera QA Graduate Challenge 1.2 :', function () {
        it('You must change the expect assertion in order to make the test pass', function () {
            //Add .getText() so it can compare to string 'PORTO, PT'
            expect(challenge1Page.contactCity.getText()).to.be.equal("PORTO, PT");
        });
    });

    describe('Mindera QA Graduate Challenge 1.3 :', function () {
        it('You must define the selector in order to make the test pass', function () {
            var buttonText = challenge1Page.jobList.getText();
            expect(buttonText).to.be.equal("TEST AUTOMATION ENGINEER (M/F)");
        });
    });
});