# Karma-Browserstack-Example
Just another unit test example project to run `Mocha` test based on `Karma` on BrowserStack infrastructure using `karma-browserstack-launcher`.

## Layout
```
karma-browserstack-example
├── src/
├── test/
├── README.md                       # This file
├── base.karma.conf.js              # base karma configuration
├── local.karma.conf.js             # to run tests on local machine
├── browserstack.karma.conf.js      # to run tests on BrowserStack
├── browserstack.launchers.conf.js  # Browser lists to test
├── webpack.config.js
└── package.json
```

## Sample test
- Run test on local: `npm run test:unit:local`
- Run test on BrowserStack: `npm run test:unit:ci`
