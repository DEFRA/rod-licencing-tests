import Page from './page'
import { logger } from 'defra-logging-facade'

class NamePage extends Page {
  // Set the value in first name and surname fields
  setName (setFirstName, setSurName) {
    $('#first-name').setValue(setFirstName)
    $('#last-name').setValue(setSurName)
    logger.info(`Name entered as:  ${setFirstName} ${setSurName}`)
  }
}

export default new NamePage('/buy/name')
