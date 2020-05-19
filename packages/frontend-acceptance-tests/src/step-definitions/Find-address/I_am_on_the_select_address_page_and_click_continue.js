'use strict'

const { defineStep } = require('cucumber')
const selectAddress = require('../../pages/address-results')


/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I expect the select address page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    selectAddress.checkErrorsOnPage(row.ErrorMessage)
  }
})


defineStep('I am on the select address page and I click continue', function () {
  selectAddress.checkUrl()
  //Set expectUrlChange to true if you expect the URL to change.
  selectAddress.continue()
})



