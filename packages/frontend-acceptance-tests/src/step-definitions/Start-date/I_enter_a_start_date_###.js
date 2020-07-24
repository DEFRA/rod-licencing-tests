'use strict'

const { defineStep } = require('cucumber')
const StartDatePage = require('../../pages/start-date')

defineStep('I enter date two days from today and click continue', function () {
  StartDatePage.checkUrl()
  StartDatePage.twoDaysFromToday()
  StartDatePage.continue()
})
