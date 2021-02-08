var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Accordion/index.html");
    browser.setWindowSize(1200, 800);
});

describe('Validate the loading functionality works correctly', () => {
    it('Verify relevant text LOADING COMPLETE appears after a period of time', (done) => {
        browser.waitUntil(function(){
            const hiddenText = $('#hidden-text');
            console.log(hiddenText.getText());
            return hiddenText.getText() === 'LOADING COMPLETE.' 
        }, 12500, 'expected text to be different');

    });//End of first TC

});//End of describe