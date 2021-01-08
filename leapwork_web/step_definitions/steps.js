const { login } = require("../steps/login_web");


const { I, LoginStep} = inject();

//Website
Given("I login to Website", () => {
  LoginStep.login_web();
  LoginStep.enter_code();
});