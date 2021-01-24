var assert = require('assert');
var expect = require('chai').expect;

describe("Verify whether webdriveruniversity links on homepage work correctly", () => {
    
    it("check that the contact us button opens the contact us page", ()=>{
        //This is because the modification in the wdio.conf.js
        //browser.url('http://www.webdriveruniversity.com/')
        browser.url('/');

        const title = browser.getTitle();
        console.log('Title is: ' + title);
        expect(title).to.equal('WebDriverUniversity.com');
        
        //browser.debug();
        //assert.strictEqual(title, 'WebDriverUniversity.com');
        //title.should.equal('WebDriverUniversity.com');
        //expect(browser).toHaveTitle('WebDriverUniversity.com');

        const contact_us = $('#contact-us');
        contact_us.click();
        browser.pause(3000);
        browser.switchWindow("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        var title_2 = browser.getTitle();
        expect(title_2).to.equal('WebDriver | Contact Us');
        var url_2 = browser.getUrl();
        expect(url_2).to.include('Contact-Us', 'URL Mismatch');

        browser.pause(3000);
        browser.closeWindow();

    });//End of first test case

}) //End of describe