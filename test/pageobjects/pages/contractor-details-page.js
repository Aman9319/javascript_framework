const installGetteres = require('../lib/install-getters');
const PageElement = require('../lib/page-element');
const SELECTOR = {
    firstName: '//label[text()="First Name*"]/preceding-sibling::input',
    lastName: '//label[text()="Last Name*"]/preceding-sibling::input',
    businessName: '//label[text()="Business Name"]/preceding-sibling::input',
    designation: '//label[text()="Designation"]/preceding-sibling::input',
    emailId: '//label[text()="Email ID*"]/preceding-sibling::input',
    phoneNumber: '//label[text()="Phone Number"]/preceding-sibling::input',
    addressLine1: '//label[text()="Address Line 1"]/preceding-sibling::input',
    addressLine2: '//label[text()="Address Line 2"]/preceding-sibling::input',
    postalCode: '//label[text()="Zip / Postal Code"]/preceding-sibling::input',
    city: '//label[text()="City"]/preceding-sibling::input',
    state: '//label[text()="State"]/preceding-sibling::input',
    country: '//label[text()="Country"]/preceding-sibling::input',
    ssnNumber: '//label[text()="SSN*"]/preceding-sibling::input',
    contractorButton: '//span[text()="Add Contractor"]',
    contractorList: '//table/child::tbody/child::tr/child::td/following-sibling::td[2]',
}

class ContractorDetailPage {
    constructor(){
        this.selector= SELECTOR;
        installGetteres.call(this, SELECTOR);

    }

    scrollByAmount(x, y)   {
        return browser.execute((xcoordinate,ycoordinate) => window.scrollBy(xcoordinate,ycoordinate),x,y);
    }

    enterTheContractorDetails(data) {
       this.firstName.waitForDisplayed();
       this.firstName.setValue(data.firstName);
       this.lastName.waitForDisplayed();
       this.lastName.setValue(data.lastName);
       this.businessName.waitForDisplayed();
       this.businessName.setValue(data.businessName);
       this.designation.waitForDisplayed();
       this.designation.setValue(data.designation);
       this.emailId.waitForDisplayed();
       this.emailId.setValue(data.emailId);
       this.phoneNumber.waitForDisplayed();
       this.phoneNumber.setValue(data.phoneNumber);
       this.addressLine1.waitForDisplayed();
       this.addressLine1.setValue(data.address1);
       this.scrollByAmount(0,300);
    //    this.address2.scrollIntoView();
       this.addressLine2.waitForDisplayed();
       this.addressLine2.setValue(data.address2);
       this.postalCode.waitForDisplayed();
       this.postalCode.setValue(data.postalCode);
    //    browser.pause(3000);
    //    this.city.waitForDisplayed();
    //    this.city.setValue(data.city);
    //    browser.pause(3000);
    //    this.state.waitForDisplayed();
    //    this.state.setValue(data.state);
    //    browser.pause(3000);
    //    this.country.waitForDisplayed();
    //    this.country.setValue(data.country);
    //    browser.pause(3000);
       this.ssnNumber.waitForDisplayed();
       this.ssnNumber.setValue(data.ssnNumber);
    //    browser.pause(3000);
       this.contractorButton.waitForDisplayed();
       this.contractorButton.click();
    }

    getTheContractorEmail() {
        return this.contractorList.getText();
    }
}


module.exports = new ContractorDetailPage();