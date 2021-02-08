var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    browser.setWindowSize(1200, 800);
  })

describe('Test Enabled DropDown menus, Checkboxes and Radio buttons', function(){

    it('Test Enabled Dropdown Menu, CheckBoxes & Radio Buttons', function(done){
        const dropdown = $('#fruit-selects').isEnabled();
        const orange = $("#fruit-selects > option:nth-child(2)").isEnabled();
        const grape = $("#fruit-selects > option:nth-child(4)").isEnabled();
        const option2 = $('//*[@id="checkboxes"]/label[2]/input').isEnabled();
        const pumpkin = $('//*[@id="radio-buttons-selected-disabled"]/input[3]').isEnabled();
        const cabbage = $('//*[@id="radio-buttons-selected-disabled"]/input[2]').isEnabled();

        browser.pause(2000);

        expect(dropdown).to.equal(true);
        expect(orange).to.equal(false);
        expect(grape).to.equal(true);
        expect(option2).to.equal(true);
        expect(pumpkin).to.equal(true);
        expect(cabbage).to.equal(false);

    });//End of first TC

});//End of describe
