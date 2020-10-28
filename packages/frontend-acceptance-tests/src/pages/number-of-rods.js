import Page from './page'
import { logger } from 'defra-logging-facade'

class NumberOfRodsPage extends Page {
  setNumberOfRods (numberOfRods) {
    switch (numberOfRods) {
      case 2:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
      case 3:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods-2').click()
      default:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
    }
  }
}

export default new NumberOfRodsPage('/buy/number-of-rods')
