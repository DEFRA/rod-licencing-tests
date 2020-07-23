@browser
Feature: I want to buy a 1 or 8 day licence adult fishing licence

  Scenario Outline: Scenario 1 - Purchase Fishing Adult Licence 1 and 8 days - Immediate start
    Given  I select a <LicenceLength> licence
    And I select a <licenceType> fishing licence
    And I select <startTime> as a start time
    *   I am 1 day over my 17th birthday
    And I am on the licence summary page and I click continue
    And I enter "<firstName>" "<lastName>" as the name
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I receive a newsletter and enter "<newsEmail>"
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    Examples:
      | LicenceLength  | firstName | lastName |  houseNo | postCode| selectAddress| startTime|licenceType| email                  | number      | newsEmail |
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | coarse    |email@gmail.com         | 07845066407 |email@gmail.com|
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | salmon    |                        | 07845066407 |email@gmail.com|
      | 1dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | salmon    |email@gmail.com         | 07845066407 |email@gmail.com|


  Scenario Outline: Scenario 2 - Purchase Fishing Adult Licence 1 and 8 days - Future start date
    Given  I select a <LicenceLength> licence
    And I select a <licenceType> fishing licence
    And I select <startFrom> as a start time
    And I enter date two days from today and click continue
    And I enter a start time of "<startTime>"
    *   I am 1 day over my 17th birthday
    And I am on the licence summary page and I click continue
    And I enter "<firstName>" "<lastName>" as the name
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    Examples:
      | LicenceLength  | firstName | lastName |  houseNo | postCode| selectAddress| startFrom       | startTime    |licenceType| email                  | number     |
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midnight     | coarse    |email@gmail.com        | 07845066407 |
      | 1dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       | salmon    |                        | 07845066407 |
      | 1dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       |salmon     |email@gmail.com         | 07845066407 |
