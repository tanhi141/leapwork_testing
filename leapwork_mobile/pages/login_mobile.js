const { I } = inject();

module.exports = {
  updateAlert: {
    laterButton: '//android.widget.Button[@resource-id=\"android:id/button1\"]',
  },


  login: {
    skipButton : '//android.view.ViewGroup[@content-desc=\"tutorial_skip\"]',
    baseXpathActivationCode :  '//android.widget.EditText[@content-desc=\"activation_',
  
    getXpathCode(index) {
      return this.baseXpathActivationCode + String(index) + '\"]';
    },

        
    nextButton :  '//android.view.ViewGroup[@content-desc=\"next\"]',
    usernameTextField : '//android.widget.EditText[@content-desc=\"login_username\"]',
    passWordTextField : '//android.widget.EditText[@content-desc=\"login_password\"]',
    signInButton : '//android.view.ViewGroup[@content-desc=\"login_signIn\"]',
    baseXpathOtpCode : '//android.widget.EditText[@content-desc=\"otp_', 
   
    getXpathOtpCode(index) {
      return this.baseXpathOtpCode + String(index) + '\"]';
    },
    
    userProfile: '//android.view.ViewGroup[@content-desc=\"bottomTab_settings\"]/android.view.ViewGroup/android.widget.ImageView',
    confirmButton: '//android.view.ViewGroup[@content-desc=\"confirm\"]',
    }
  }