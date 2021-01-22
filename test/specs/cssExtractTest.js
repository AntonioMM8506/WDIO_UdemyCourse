describe('Test the webdriveruniversity homepage', function() {
    
    it('Output the height of the homepage carousel', function(){
        browser.url('/');
        browser.pause(2000);
        var divCarouselHeight = $('#udemy-promo-thumbnail').getCSSProperty('height');
        console.log(divCarouselHeight);

    })//End of first test case

})//End of describe