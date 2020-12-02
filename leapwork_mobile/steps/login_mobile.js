const { I , loginMobilePage, commonAction , constant} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(loginMobilePage.updateAlert.laterButton)) {
      commonAction.onTapButton(loginMobilePage.updateAlert.laterButton);
    }
  },
  skipTutorial(){
    commonAction.onTapButton(loginMobilePage.login.skipButton);
  },

  inputActivationCode(activationCode) {
    I.waitForElement(loginMobilePage.login.getXpathCode(0), 30);

    var index = 0
    for (index; index < activationCode.length; index++) {
      I.fillField(loginMobilePage.login.getXpathCode(index), activationCode[index]);
    }
  },

  login(password) {
    commonAction.inputText(password, loginMobilePage.login.passWordTextField);
    commonAction.onTapButton(loginMobilePage.login.signInButton);
  },  

  inputOtpCode(otpCode) {
    I.waitForElement(loginMobilePage.login.getXpathOtpCode(0), 30);

    var index = 0
    for (index; index < otpCode.length; index++) {
      I.fillField(loginMobilePage.login.getXpathOtpCode(index), otpCode[index]);
    }
  }
}
