const { I } = inject();

module.exports = {
  photoAndVideo: {
    photoAndVideoOption:'//android.view.ViewGroup[@content-desc="chatDetail_sendPhoto"]',
    allowOption:'//*[@class="android.widget.Button" and @text="ALLOW"]',
    denyOption: '//*[@class="android.widget.Button" and @text="DENY"]',
    sendButon: '//android.view.ViewGroup[@content-desc="iconSend"]',
    fileUploaded: '//android.view.ViewGroup[@content-desc="message_image"]',
    }
  
}