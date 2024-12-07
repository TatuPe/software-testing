# Group testing 123 project repository
[![Coverage Status](https://coveralls.io/repos/github/TatuPe/software-testing/badge.svg?branch=main)](https://coveralls.io/github/TatuPe/software-testing?branch=main)

## Purpose of this repository

This is a project repository for Software Testing course
at Tampere University.

To run tests locally run:<br>
````
npm install
npm test
````

To generate coverage reports locally run:<br>
Please note that coveralls universal reporter needs to be installed: <br>
https://github.com/coverallsapp/coverage-reporter
````
npm run coverage
coveralls report --repo-token=TOKEN_TO_COVERALLS
````