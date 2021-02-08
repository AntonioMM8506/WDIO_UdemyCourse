var expect = require('chai').expect;

beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    
    const isEnabled = $('#not-displayed');
    const check = isEnabled.isExisting();
    console.log(isEnabled.isExisting());
    expect(check).to.equal(true);

  });//End of first TC


  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    const isVisible = $('#visibility-hidden');
    const check = isVisible.isExisting();
    console.log(isVisible.isExisting());
    expect(check).to.equal(true);
    
  });//End of second TC


  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    const isOpac = $('#zero-opacity');
    const check = isOpac.isExisting();
    console.log(isOpac.isExisting());
    expect(check).to.equal(true);

  });//End of third TC


  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    const isHead = $('h1');
    const check = isHead.isExisting();
    console.log(isHead.isExisting());
    expect(check).to.equal(true);

  });//End of fourth TC
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    const isNon = $('#no-such-element');
    const check = isNon.isExisting();
    console.log(isNon.isExisting());
    expect(check).to.equal(false);

  });//End of fifth TC

});//End of describe