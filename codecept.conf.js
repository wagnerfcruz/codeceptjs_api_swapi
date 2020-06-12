const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*_test.js',
  output: 'output',
  helpers: {
    WebDriver: {
      AXIOS: {
        require: 'codeceptjs-axios',      
      }
    }
  },
  
  bootstrap: null,
  name: 'codeceptjs_easynvest',

  mocha: {},
  mocha: {"reporterOptions":{
    "reportDir": "output"
  }}
}