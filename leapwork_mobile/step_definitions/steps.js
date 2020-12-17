const { login } = require("../steps/login_mobile");

const { I, loginMobileStep, chatsMobileStep, filesMobileStep, sendImageMobileStep } = inject();
// Add in your custom step files

Given("I test login", () => {
  // loginMobileStep.onAcionLater();

  // loginMobileStep.skipTutorial();

  // loginMobileStep.inputActivationCode("1dhmwdkqno");
  // loginMobileStep.login("Testing@123");

  // loginMobileStep.inputOtpCode("111111");
});


When("I create 1:1 Chat", () => {
  chatsMobileStep.startChat(); 
});



Then("I upload files", () => {
  filesMobileStep.selectFiles();
});

// Given("I test Chats send Image", () => {
  // sendImageMobileStep.onAcionLater();
  // sendImageMobileStep.chatTeam_sendImage();
//   sendImageMobileStep.chatTeam_sendVideo()
  
// });

// Given("I test login", () => {
//   loginMobileStep.onAcionLater();
//   loginMobileStep.skipTutorial();
//   loginMobileStep.inputActivationCode("flpynyto1n");
//   loginMobileStep.login("Testing@123");
//   loginMobileStep.inputOtpCode("111111");
// });
