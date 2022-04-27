'use strict'

const { defineStep } = require('@cucumber/cucumber')
const startKind = require('../../pages/start-kind')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I expect the start kind page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    startKind.checkErrorsOnPage(row.ErrorMessage)
  }
})
