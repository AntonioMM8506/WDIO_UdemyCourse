var expect = require('chai').expect;

beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements are visible', function() {
  it('Button display is set to non display therefore should return false', function(done) {
	const isVisible = $('#not-displayed');
	const check = isVisible.isClickable();
	console.log(check);
	expect(check).to.equal(false);

  });


  it('Button display is set to visibility hidden therefore should return false', function(done) {
	const isVisible = $('#visibility-hidden');
	const check = isVisible.isClickable();
	console.log(check);
	expect(check).to.equal(false);

  });


  it('Button display is set to zero opacity therefore should return false', function(done) {
	const isVisible = $('#zero-opacity');
	const check = isVisible.isClickable();
	console.log(check);
	expect(check).to.equal(false);
  });


  it('Header text is visible therefore should return true', function(done) {
	const isVisible = $('h1');
	const check = isVisible.isClickable();
	console.log(check);
	expect(check).to.equal(true);
  });

});//End of describe