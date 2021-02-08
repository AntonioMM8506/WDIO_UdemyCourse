//Mocha hooks

const { expect } = require("chai");

beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us from WebdriverUni', function(){
    beforeEach(function(){
        console.log("Inside the describe block");
    })
    
    it('Should be able to submnit a succesful submission via contact us form', function(done){
        const first_name = $("[name=first_name]")
        const last_name = $("[name=last_name]")
        const email = $("[name=email]")
        const message = $("[name=message]")
        const sub = $("[type=submit]")
        
        first_name.setValue("Joe")
        last_name.setValue("Blogs")
        email.setValue("joe_blogs@mail.com")
        message.setValue("How much does this product x cost?")
        sub.click();

        browser.pause(2000);
        const loadingMessage = $('#contact_reply h1');
        expect(loadingMessage.isExisting(), 'Succesful submission Message does not exist').to.be.true;
        expect(loadingMessage.getText()).to.be.equal('Thank You for your Message!', 
        `Expected message to be "Thank You for your Message" but found "${loadingMessage.getText()}" `);
    
    });//End of first test case

    it('Should not be able to submnit a succesful submission via contact us form as all fields are required - Missed message', function(done){
        const first_name = $("[name=first_name]")
        const last_name = $("[name=last_name]")
        const email = $("[name=email]")
        //const message = $("[name=message]")
        const sub = $("[type=submit]")
        
        first_name.setValue("Joe")
        last_name.setValue("Blogs")
        email.setValue("joe_blogs@mail.com")
        //message.setValue("How much does this product x cost?")
        sub.click();

        browser.pause(2000);
        const errorMessage = $('body');
        expect(errorMessage.isExisting(), 'Error Message displayed').to.be.true;
        expect(errorMessage.getText()).to.be.equal('Error: all fields are required', 
        `Expected message to be "Error: all fields are required" but found "${errorMessage.getText()}"`);
    
    });//End of second test case


    it('Should be able to submnit a succesful submission via contact us form as all fields are required - Missed email', function(done){
        const first_name = $("[name=first_name]")
        const last_name = $("[name=last_name]")
        //const email = $("[name=email]")
        const message = $("[name=message]")
        const sub = $("[type=submit]")
        
        first_name.setValue("Joe")
        last_name.setValue("Blogs")
        //email.setValue("joe_blogs@mail.com")
        message.setValue("How much does this product x cost?")
        sub.click();
    
        browser.pause(2000);
        const errorMessage = $('body');
        expect(errorMessage.isExisting(), 'Error Message displayed').to.be.true;
        expect(errorMessage.getText()).to.be.equal('Error: all fields are required\nError: Invalid email address', 
        `Expected message to be "Error: all fields are required" but found "${errorMessage.getText()}"`);

    });//End of third test case

});//End of describe