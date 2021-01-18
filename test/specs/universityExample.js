describe("webdriveruniversity", () => {
    
    it("check that the contact us button opens the contact us page", ()=>{
        //This is because the modification in the wdio.conf.js
        //browser.url('http://www.webdriveruniversity.com/')
        browser.url('/')
        expect(browser).toHaveTitle('WebDriverUniversity.com');
        const contact_us = $('#contact-us')
        contact_us.click()
        browser.pause(3000)
    
    })//End of first test case

    
    it("check that the LogIn button opens the login portal page", () => {
        browser.url('/')
        expect(browser).toHaveTitle('WebDriverUniversity.com');
        const login_portal = $('#login-portal')
        login_portal.click()
        browser.pause(3000)
        
    })//End of second test case
    

}) //End of describe