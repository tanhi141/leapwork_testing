Feature('Login');

Scenario('test something', ({ I, LoginStep, GetCodeStep}) => {
  LoginStep.login_web();
  LoginStep.enter_code();
  GetCodeStep.get_Code();
});

