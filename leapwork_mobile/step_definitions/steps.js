const { login } = require("../steps/login_mobile");

const { I, loginMobileStep, chatsMobileStep, filesMobileStep, photoAndVideoStep } = inject();
// Add in your custom step files

//Nhiiiiii
Given("I test login", () => {
  //loginMobileStep.onAcionLater();
  // loginMobileStep.skipTutorial();
  // loginMobileStep.inputActivationCode("lduyi5ae00");
  // loginMobileStep.login("Testing@123");
  // loginMobileStep.inputOtpCode("111111");
});

//Ngaaaaa
When("I create 1:1 Chat", () => {
  chatsMobileStep.startChat();
});

Then("I upload files", () => {
  filesMobileStep.selectFiles();
});

Then("I upload Photo And Video", () => {
  photoAndVideoStep.selectPhotoAndVideo();
});