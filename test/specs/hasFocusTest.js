var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  })

describe('Test Radio Buttons page', function(){
      
    it('Should be able to focus on radio button elements', function(done) {
        browser.setWindowSize(1200, 800);

        const checkbox1 = $('#checkboxes > label:nth-child(1) > input[type=checkbox]');
        const checkbox3 = $('#checkboxes > label:nth-child(5) > input[type=checkbox]');
        
        browser.pause(2000);
        checkbox1.click();
        
        const check1 = checkbox1.isFocused();
        console.log("Checkbox button 1 has a value of: ", check1 );
        expect(check1, 'The checkbox 1 should have focus!').to.be.true;

        const check3 = checkbox3.isFocused(); 
        console.log("Checkbox button 3 has a value of: ", check3 );
        expect(check3, 'The checkbox 3 should not have focus!').to.be.false;

    });//End of first TC


});//End of describe