/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

class PageBlock {
    constructor(element) {
        this.element = element;
    }
    viewBlock() {
        return `I have just viewed ${this.element}`;
    }
}

class Page {
    constructor(baseUrl, path) {
        this.baseUrl = baseUrl;
        this.path = path;
    }
    viewBaseUrl() {
        return `My base URL = ${this.baseUrl}`;
    }

    get footer() {
        return new PageBlock('footer');
    }

    get header() {
        return new PageBlock('header');
    }

    open() {
        return `I have just navigated to ${this.baseUrl}${this.path}`;
    }

}

class RegistrationPage extends Page {
    constructor(baseUrl, path) {
        super(baseUrl, path);
    }
    get fullNameField() {
        return `Full Name field`;
    }
    get usernameField() {
        return `Username field`;
    }
    get passwordField() {
        return 'Password field';
    }
    get emailField() {
        return 'Email field';
    }
    get registerButton() {
        return `Register buttton`;
    }
    get registerButton() {
        return `Register button`;
    }
    typeFullName(text) {
        return `I have just typed '${text}' into ${this.fullNameField}`;
    }

    typeUsername(text) {
        return `I have just typed '${text}' into ${this.usernameField}`;
    }

    typePassword(text) {
        return `I have just typed '${text}' into ${this.passwordField}`;
    }
    typeEmail(text){
        return `I have just typed '${text}' into ${this.emailField}`;
    }

    clickRegister() {
        return `I have just clicked ${this.registerButton}`;
    }
}

const regPage = new RegistrationPage('www.wikipedia.org', '/register');
console.log(regPage);
console.log(regPage.viewBaseUrl());
console.log(regPage.open());
console.log(regPage.footer.viewBlock());
console.log(regPage.header.viewBlock());
console.log(regPage.typeFullName('Joe Samuel'));
console.log(regPage.typeUsername('joesamuel'));
console.log(regPage.typePassword('qwerty123'));
console.log(regPage.typeEmail('joesamuel@gmail.com'));
console.log(regPage.clickRegister());
