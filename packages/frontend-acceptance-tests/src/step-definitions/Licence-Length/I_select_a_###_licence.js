'use strict'

const { defineStep } = require('cucumber')
const licenceLength = require('../../pages/licence-length')

defineStep(/^I select a (12MonthLicence|8dayLicence|1dayLicence) licence$/, function (licenceDuration) {
  licenceLength.open() // only add when opening the service.
  licenceLength.checkUrl()
  licenceLength.setLicenceDuration(licenceDuration)
  licenceLength.click('button', 'Continue', true)
})
