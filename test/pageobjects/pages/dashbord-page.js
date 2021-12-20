// const Basepage = require('./base-page');
const installGetter = require('../lib/install-getters');
const SELECTORS = {
    onBoard: '//h3[text()="Onboard"]/parent::div/following-sibling::div[2]/button',
}

class DashbordPage {
    constructor() {
        this.selectors = SELECTORS;
        installGetter.call(this, SELECTORS);
    }
   
    clickOnboardArrow() {
        // browser.pause(6000);
        // this.onBoard.waitForDisplayed();
        this.onBoard.click();
    }
   
}

module.exports = new DashbordPage();