var assert = require('assert');
var expect = require('chai').expect;

describe("Verify whether webdriveruniversity links on homepage work correctly", () => {
    
    it("check that the contact us button opens the contact us page", ()=>{
        //This is because the modification in the wdio.conf.js
        //browser.url('http://www.webdriveruniversity.com/')
        browser.url('/');

        const title = browser.getTitle();
        assert.strictEqual(title, 'WebDriverUniversity.com');
        expect(title).to.equal('WebDriverUniversity.com');
        title.should.equal('WebDriverUniversity.com');
        //expect(browser).toHaveTitle('WebDriverUniversity.com');

        const contact_us = $('#contact-us');
        contact_us.click();
    
    });//End of first test case

}) //End of describe