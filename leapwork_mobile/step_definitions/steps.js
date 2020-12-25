const { login } = require("../steps/login_mobile");


const { I, loginMobileStep, chatsMobileStep, filesMobileStep, sendImageMobileStep , photoAndVideoStep} = inject();
// Add in your custom step files

//Start Login Correct

Given("I test login", () => {
  // loginMobileStep.onAcionLater();

  // loginMobileStep.skipTutorial();

  // loginMobileStep.inputActivationCode("1dhmwdkqno");
  // loginMobileStep.login("Testing@123");

  // loginMobileStep.inputOtpCode("111111");
});

// End Login Correct


When("I create 1:1 Chat", () => {
  chatsMobileStep.startChat();
});

Then("I upload files", () => {
  filesMobileStep.selectFiles();
});

Then("I upload Photo And Video", () => {
  photoAndVideoStep.selectPhotoAndVideo();
});
Then("I upload image by Camera", () => {
  sendImageMobileStep.sendImage();
});


