//Mocha hooks

const { expect } = require("chai");
const request = require('sync-request');

/*
browser.addCommand("submitDataViaContactUsForm", function(firstName, lastName, emailAddress, comments){
    const first_name = $("[name=first_name]")
    const last_name = $("[name=last_name]")
    const email = $("[name=email]")
    const message = $("[name=message]")
    const sub = $("[type=submit]")

    if(firstName){
        first_name.setValue(firstName);
    }
    if(lastName){
        last_name.setValue(lastName);
    }
    if(emailAddress){
        email.setValue(contactDetail.email);
    }
    if(comments){
        message.setValue(contactDetail.body);
    }
    sub.click();
});
*/

beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us from WebdriverUni', function(){
    var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    var contactusDetails = JSON.parse(res.getBody().toString('utf8'));
    
    const firstNameSelector = $("[name=first_name]");
    const lastNameSelector = $("[name=last_name]");
    const emailAddressSelector = $("[name=email]");
    const commentsSelector = $("textarea");
    const succesfulSubmissionSelector = $("#contact_reply h1");
    const unsuccesfulSubmissionSelector = $("body");
    const submitButtonSelector= $("[type=submit]");
    
    function setFirstName(firstName){
        return firstNameSelector.setValue(firstName);
    }

    function setLastName(lastName){
        return lastNameSelector.setValue(lastName);
    }

    function setEmailAdress(emailAddress){
        return emailAddressSelector.setValue(emailAddress);
    }

    function setComment(comment){
        return commentsSelector.setValue(comment);
    }

    function clickSubmitButton(){
        return submitButtonSelector.click();
    }

    function confirmSuccessfulSubmission(){
        const validateSubmissionHeader = browser.waitUntil(function(){
            succesfulSubmissionSelector.getText();
        }) 
    }

    contactusDetails.forEach(function(contactDetail){

    it.only('Should be able to submnit a succesful submission via contact us form', function(done){
        //browser.submitDataViaContactUsForm('joe', 'Blogs', contactDetail.email, contactDetail.body);
        
        const first_name = $("[name=first_name]")
        const last_name = $("[name=last_name]")
        const email = $("[name=email]")
        const message = $("[name=message]")
        const sub = $("[type=submit]")

        first_name.setValue("Joe")
        last_name.setValue("Blogs")
        email.setValue(contactDetail.email)
        message.setValue(contactDetail.body)
        sub.click();

        browser.pause(2000);
        const loadingMessage = $('#contact_reply h1');
        expect(loadingMessage.isExisting(), 'Succesful submission Message does not exist').to.be.true;
        expect(loadingMessage.getText()).to.be.equal('Thank You for your Message!', 
        `Expected message to be "Thank You for your Message" but found "${loadingMessage.getText()}" `);
    })

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