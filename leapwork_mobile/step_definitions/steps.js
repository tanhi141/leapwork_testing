const { login } = require("../steps/login_mobile");

const { I, loginMobileStep } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  loginMobileStep.onAcionLater();
  loginMobileStep.skipTutorial();
  loginMobileStep.inputActivationCode("hehmbakl0z");
  loginMobileStep.login("Testing@123");
  loginMobileStep.inputOtpCode("111111")
});
