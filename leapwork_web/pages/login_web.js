const { I } = inject();

module.exports = {
  login: {
    companyTextbox : '//input[@placeholder = "Company"]',
    nextButton: "//span[text()='Next']",
    username: "//input[@placeholder='Username']",
    password:"//input[@placeholder='Password']",
    loginBtn: "//span[@class='Login__button--2Y42w']",
    securityCode1: "(//hr[@class='OTPInput__input__border--1bhD1'])[1]",
    securityCode2: "(//hr[@class='OTPInput__input__border--1bhD1'])[2]",
    securityCode3: "(//hr[@class='OTPInput__input__border--1bhD1'])[3]",
    securityCode4: "(//hr[@class='OTPInput__input__border--1bhD1'])[4]",
    securityCode5: "(//hr[@class='OTPInput__input__border--1bhD1'])[5]",
    securityCode6: "(//hr[@class='OTPInput__input__border--1bhD1'])[6]",
    //confirmBtn: "//span[text()='Confirm']",
    }
  }