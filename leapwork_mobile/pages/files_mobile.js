const { I } = inject();

module.exports = {
  files: {
    fileOption:'//android.view.ViewGroup[@content-desc="chatDetail_sendFile"]',
    allowOption:'//*[@class="android.widget.Button" and @text="ALLOW"]',
    cancelOption: '//*[@class="android.widget.Button" and @text="CANCEL"]',
    sendButon: '//android.view.ViewGroup[@content-desc="iconSend"]',
    fileUploaded: '//android.view.ViewGroup[@content-desc="message_image"]',
    },
  
}

//android.view.ViewGroup[@content-desc="chatDetail_sendPhoto"]
//android.view.ViewGroup[@content-desc="chatDetail_camera"]
//android.view.ViewGroup[@content-desc="ic_back"]
//android.view.ViewGroup[@content-desc="iconSend"]
//cancelButton:'//android.view.ViewGroup[@content-desc="cancel"]',
//*[@class="android.widget.ImageView" and @text="ALLOW"]'