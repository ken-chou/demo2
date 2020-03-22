# UI test demo
Using [Nightwatch](https://nightwatchjs.org/) to test a webpage.

# Pre-requisites

npm needs to be installed, the steps will vary depending on your OS and distribution.
```
npm install nightwatch
npm install geckodriver --save-dev
npm install chromedriver --save-dev
```

# Running tests locally

From the root directory of this repository
```
npm test
```
# Running tests on Travis-CI

This repository comes pre-configured with a `.travis.yml` file. We are using Travis not because I am familiar with it but because it is free.