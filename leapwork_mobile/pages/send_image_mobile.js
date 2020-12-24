const { I } = inject();

module.exports = {
  listOption: {
    cameraButton: '//android.view.ViewGroup[@content-desc="chatDetail_camera"]',
  },

  sendImageAndVideo: {
    acceptCamera: '//android.widget.Button[@resource-id=\"com.android.packageinstaller:id/permission_allow_button\"]',
    //Nhiiii
    // enterButton: '//android.view.View[@content-desc=\"Phím chụp\"]',
    // doneButton: '//android.widget.ImageView[@content-desc=\"Hoàn tất\"]',
    // sendButton: '//android.view.ViewGroup[@content-desc=\"iconSend\"]',
    
    //////Nga
    enterButton: '//android.view.View[@content-desc="Shutter button"]',  
    doneButton: '//android.widget.ImageView[@content-desc="Done"]',
    sendButton: '//android.view.ViewGroup[@content-desc="iconSend"]',
  },
}