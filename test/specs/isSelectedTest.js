var expect = require('chai').expect;

beforeEach(function() {
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    browser.setWindowSize(1200, 800);
});

describe('Test Selected DropDown Menus, Checkboxes & Radio Buttons', function(){

    it('Test Selected DropDown Menus, Checkboxes & Radio Buttons', (done) =>{
        const dropDownJava = $('#dropdowm-menu-1').isSelected();
        const dropDownMaven = $('#dropdowm-menu-2').isSelected();
        const option2 = $('#checkboxes > label:nth-child(3) > input[type=checkbox]').isSelected();
        const option3 = $('#checkboxes > label:nth-child(5) > input[type=checkbox]').isSelected();
        const pumpkin = $('#radio-buttons-selected-disabled > input[type=radio]:nth-child(5)').isSelected();
        
        expect(dropDownJava).to.equal(false, `Expected to be false but found "${dropDownJava}"`);
        expect(dropDownMaven).to.equal(false, `Expected to be false but found "${dropDownMaven}"`);
        expect(option2).to.equal(false, `Expected to be false but found "${option2}"`);
        expect(option3).to.equal(true, `Expected to be true but found "${option3}"`);
        expect(pumpkin).to.equal(true, `Expected to be true but found "${pumpkin}"`);

    }); //End of first TC

});//End of describe