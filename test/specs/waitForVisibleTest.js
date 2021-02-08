var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Ajax-Loader/index.html");
    browser.setWindowSize(1200, 800);
});

describe('Validate whether the click me button is visible', function(){
    it('Validate whether the click me button code is visible within the DOM', () => {
        //p[text()='CLICK ME!']
        const button = $('#button1 > p');
        button.waitForExist({timeout: 8000, reverse: false});
        //.toBeVisible()

    });//End of first TC

});//End of describe




