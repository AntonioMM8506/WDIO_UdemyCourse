var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Hidden-Elements/index.html");
    browser.setWindowSize(1200, 800);
});

describe("Test whether specific elements are visible within viewport", ()=>{

    it('Should resize the current view port', (done) => {
        const windowSize = browser.getWindowSize();
        console.log(windowSize);
    }); //End of first TC

    it("Should detect if an element is visible", (done)=>{
        const notDisplayed = $('#not-displayed').isDisplayedInViewport(); //false
        const visibilityHidden = $('#visibility-hidden').isDisplayedInViewport(); //false
        const zeroOpacity = $('#zero-opacity').isDisplayedInViewport(); //false
        const title = $("h1").isDisplayedInViewport(); //true
        
        browser.pause(2000);

        expect(notDisplayed).to.equal(false);
        expect(visibilityHidden).to.equal(false);
        expect(zeroOpacity).to.equal(false);
        expect(title).to.equal(true);

        const width = browser.getWindowSize().width;
        console.log("width",width);
        const height = browser.getWindowSize().height;
        console.log("height", height);
    });//End of second TC

});//End of describe