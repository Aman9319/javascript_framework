describe("page actions Features", () => {
    it("move to element", () => {
        browser.url("https://www.spicejet.com/")
        browser.maximizeWindow();
        browser.pause(3000);
        const addOn = $('//div[text()="Add-ons"]');
        addOn.waitForDisplayed();
        addOn.moveTo();
        browser.pause(1000);
        $('//div[text()="Hot Meals"]').click();
        browser.pause(3000);
        browser.switchWindow('https://book.spicejet.com/RetrieveBooking.aspx?AddMeal=true');
        const a = $('//p[contains(text(),"Domestic")]/child::a');
        a.scrollIntoView();
        a.click();
        browser.pause(4000  );
    });
})