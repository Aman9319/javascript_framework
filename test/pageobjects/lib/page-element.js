class PageElement {
    constructor(selector) {
       console.log('hiii==', selector);
        this.selector=selector;
        console.log('selectorpageElement===', selector);
        
    }

    element (){
       return $(this.selector);
    }
    getText() {
       return $(this.selector).getText();
    }
    click() {
       return $(this.selector).click();
    }

    setValue(value) {
       return $(this.selector).setValue(value);
    }

    waitForDisplayed() {
       return $(this.selector).waitForDisplayed();
   }
   scrollIntoView() {
      return $(this.selector).scrollIntoView();
   }

   getText() {
      return $(this.selector).getText();
   }
}


module.exports = PageElement;