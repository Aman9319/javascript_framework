const installGetteres = require('../lib/install-getters');
const SELECTOR = {
    userName: '#email',
    password: '#pwd',
    button: '#submit',
}
class BasePase {
    constructor(){
        this.selector= SELECTOR;
        installGetteres.call(this, SELECTOR);

    }

    enterUserName(value) {
       this.userName.setValue(value); 
    }

    enterPassword(value) {
        this.password.setValue(value);
    }

    clickOnLogInButton() {
        this.button.click();
    }
}


module.exports = new BasePase();