//Mocha hooks

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
    
    });//End of first test case


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
    
    });//End of first test case

});//End of describe