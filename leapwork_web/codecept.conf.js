const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://web.qa.leapxpert.app',
      show: true,
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    LoginPage: "./pages/login_web.js",
    LoginStep: "./steps/login_web.js",
    GetCodePage:"./pages/getCode_web.js",
    GetCodeStep:"./steps/getCode_web.js",
    commonLocatorPage: "./pages/commonLocator.js",
    commonAction: './steps/commom_action.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_web',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}