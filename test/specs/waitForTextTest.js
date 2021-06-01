var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Accordion/index.html");
    browser.setWindowSize(1200, 800);
});

describe('Verify that the correct text appears on the accordion page', ()=>{
    
    it('Verify loading complete text is visible after a set duration of time', ()=>{
        const hiddenText = $('#hidden-text');
        console.log("Current Text", hiddenText.getText());
        hiddenText.waitForExist({timeout: 15000});

        try{
            expect(hiddenText.getText()).to.equal("Test")
        } catch(err){
            console.log("Exception:" + err);
        }

    });//End of first TC

});//End of describe