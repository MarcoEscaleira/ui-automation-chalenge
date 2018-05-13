var expect = require('chai').expect;
var challenge3Page = require('../pageObjects/challenge3.page');

describe('Mindera QA Graduate Challenge 3:', function () {
    //Function to fill the form
    function formFill(name = '', email = '', password = '', confirmPassword = '', country = '', language = '', terms, newsletter) {
        challenge3Page.name.setValue(name);
        challenge3Page.email.setValue(email);
        challenge3Page.password[0].setValue(password);
        challenge3Page.password[1].setValue(confirmPassword);
        challenge3Page.country.selectByValue(country);
        challenge3Page.language.selectByValue(language);

        if (terms === 1) {
            challenge3Page.terms.click();
        }
        if (newsletter === 1) {
            challenge3Page.newsletter.click();
        }
    }

    beforeEach(function () {
        challenge3Page.open();
    });

    /*
        Notes:
        For some reason the validation of the form in the client side doesn't open the alert.

        Form when viewport is lower than 700px width makes all inputs stop displaying

        In this thrid challenge I got somewhat confused as for the 'it' statements I didn't get sure if it was suppose to force success on the expect function.
    */

    it('Click "Create User" button with all fields empty should return a warning message', function () {
        challenge3Page.submitBtn.click(); //Submit the form

        expect(browser.alertText()).to.be.equal("The information in the form is not correct.");
        browser.alertAccept();
    });

    it('Fill the name field and click "Create User" should return a warning message', function () {
        challenge3Page.name.setValue("TestTest");    //Define the name field
        
        challenge3Page.submitBtn.click();
        
        expect(browser.alertText()).to.be.equal("The information in the form is not correct.");
        browser.alertAccept();
    });

    
    it('Fill the form with different passwords should return a warning message', function () {
        //Fill in the form but with diferent password
        formFill("TestTest", "test@email.com", "one", "two", "AGO", "pt_PT", 1, 1);
        
        challenge3Page.submitBtn.click();
        
        try {
            expect(browser.alertText()).to.be.equal("The information in the form is not correct.");
        } finally {
            if (browser.alertText()) {
                browser.alertDismiss();
            }
        }
    });

    it('Fill the form without Terms&Conditions should return a warning message', function () {
        //Fill in the form but with diferent password
        formFill("TestTest", "test@email.com", "one", "two", "AGO", "pt_PT", 1, 0);
        
        challenge3Page.submitBtn.click();
        
        try {
            expect(browser.alertText()).to.be.equal("The information in the form is not correct.");
        } finally {
            if (browser.alertText()) {
                browser.alertDismiss();
            }
        }
    });

    it('Password and Confirm Password inputs should be type="password"', function () {
        //Check if password type is equal to password
        expect(challenge3Page.password[0].getAttribute('type')).to.be.equal('password');
        expect(challenge3Page.password[1].getAttribute('type')).to.be.equal('password');
    });
});