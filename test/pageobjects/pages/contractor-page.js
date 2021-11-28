const installGetteres = require('../lib/install-getters');
const SELECTOR = {
    multipleContractor: '//div[text()=" Multiple"]/parent::a',
}

class ContractorPage {
    constructor(){
        this.selector= SELECTOR;
        installGetteres.call(this, SELECTOR);

    }

    clickOnMultipleContractor() {
        browser.pause(6000);
       this.multipleContractor.waitForDisplayed();
       this.multipleContractor.click();
    }
}


module.exports = new ContractorPage();