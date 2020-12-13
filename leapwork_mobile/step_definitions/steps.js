const { login } = require("../steps/login_mobile");

const { I, loginMobileStep, chatsMobileStep, filesMobileStep } = inject();
// Add in your custom step files

//Nhiiiiii
Given("I test login", () => {
  //loginMobileStep.onAcionLater();
  // loginMobileStep.skipTutorial();
  // loginMobileStep.inputActivationCode("krk3bqspuz");
  // loginMobileStep.login("Testing@123");
  // loginMobileStep.inputOtpCode("111111");
});

When("I create 1:1 Chat", () => {
  chatsMobileStep.startChat();
});

//Ngaaaaa
Then("I upload files", () => {
  filesMobileStep.selectFiles();
});