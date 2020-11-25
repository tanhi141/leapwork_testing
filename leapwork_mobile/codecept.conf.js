exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      device: 'Redmi',
      automationName: 'Appium',
      desiredCapabilities: {
        appPackage: 'com.leapxpert.manager.qa',
        appActivity: 'com.leapxpertapp.MainActivity',
        noReset: true,
        fullReset: false,
        automationName: 'UIAutomator2',
        newCommandTimeout: 30000
      }
    },
    Puppeteer: {
      show: false,
      windowSize: '1536x864',
      chrome: {
        args: ['--ignore-certificate-errors']
      },
      firefox: {
        args: ['--ignore-certificate-errors']
      }
    },
    // REST: {
    //   endpoint: 'https://api.adaptavist.io/tm4j/v2',
    //   onRequest: [Function: onRequest],
    // }
  },
  include: {
    I: './steps_file.js',
    loginMobilePage: './pages/login_mobile.js',
    loginMobileStep: './steps/login_mobile.js',
    commonAction: './steps/commom_action.js', 
    constant: './constant.js', 
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output/result.html'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  rerun: {
    minSuccess: 1,
    maxReruns: 6
  },
  // tests: './tests/*_test.js', //cmt when run BDD 
  name: 'lxp-web-automation'
}