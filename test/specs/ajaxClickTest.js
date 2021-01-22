
describe('Test that the button is clickable once the Ajax loader completes loading', function(){
    
    //it.skip skips the test case when the file is executed
    it.skip('Attempt to click the button asap', function(done){
        browser.url('/Ajax-Loader/index.html');
        browser.elementClick('#button1');
    })//End of irst case

   
    //it.only executes only this test case, if there is another one with this characteristic
    //it will call it in sequence order.
    it.only('Attempt to click the button after 7 seconds', function(done){
        browser.url('/Ajax-Loader/index.html');     
        this.timeout(20000);
        const button_1 = $("#button1");
        button_1.waitForDisplayed({ timeout: 50000 });
        browser.elementClick("#button1");
        browser.pause(7000);
    })//End of second case

})//End of describe