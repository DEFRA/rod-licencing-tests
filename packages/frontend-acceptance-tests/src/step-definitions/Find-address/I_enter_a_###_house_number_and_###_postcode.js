'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const AddressPage = require('../../pages/address-lookup')

defineStep(/^I enter "(.*)" and "(.*)" as my house number and postcode$/, function (setHouseNumber, setPostcode) {
  AddressPage.checkUrl()
  AddressPage.setHouseNumberAndPostcode(setHouseNumber, setPostcode)
  AddressPage.click('button', 'Find address', true)
})

defineStep(/^I enter "(.*)" and "(.*)" as an invalid house number and postcode$/, function (setHouseNumber, setPostcode) {
  AddressPage.checkUrl()
  AddressPage.setHouseNumberAndPostcode(setHouseNumber, setPostcode)
  AddressPage.continue()
})