const installGetteres = require('../lib/install-getters');
const SELECTOR = {
    addIndividual: '//h3[text()="Add Individual"]/parent::div/following-sibling::div[2]/button',
}

class AddContractorPage {
    constructor(){
        this.selector= SELECTOR;
        installGetteres.call(this, SELECTOR);

    }

    clickOnAddIndivisual() {
        // browser.pause(6000);
       this.addIndividual.waitForDisplayed();
       this.addIndividual.click();
    }
}


module.exports = new AddContractorPage();