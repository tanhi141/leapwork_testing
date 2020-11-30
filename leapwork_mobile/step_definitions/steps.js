const { login } = require("../steps/login_mobile");

const { I, loginMobileStep } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  loginMobileStep.onAcionLater();
  loginMobileStep.skipTutorial();
  loginMobileStep.inputActivationCode("uvtrvjqj98");
  loginMobileStep.login("Testing@123");
  loginMobileStep.inputOtpCode("111111")
});
