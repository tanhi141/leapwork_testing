const { login } = require("../steps/login_mobile");

const { I, loginMobileStep , chatsMobileStep} = inject();
// Add in your custom step files

//Nhiiiiii
Given('I test login', () => {
  loginMobileStep.onAcionLater();
  loginMobileStep.skipTutorial();
  loginMobileStep.inputActivationCode("uvtrvjqj98");
  loginMobileStep.login("Testing@123");
  loginMobileStep.inputOtpCode("111111")

  // chatsMobileStep.onAcionLater();
  chatsMobileStep.startChat();
});


// Given('I create 1:1 Chat', () => {
//   chatsMobileStep.onAcionLater();
//   chatsMobileStep.startChat();

// });



//Ngaaaaa
// Given('I have a defined step', () => {
//   loginMobileStep.onAcionLater();
//   loginMobileStep.skipTutorial();
//   loginMobileStep.inputActivationCode("hehmbakl0z");
//   loginMobileStep.login("Testing@123");
//   loginMobileStep.inputOtpCode("111111")
// });

