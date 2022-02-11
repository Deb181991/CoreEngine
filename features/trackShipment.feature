@trackShipment
Feature: Verify the Track Shipments functionality

  @trackShipmentOMS
  Scenario Outline:  Verify the Track Shipments functionality[OMS_TS_01]
    Given navigate into the OMS website
    And provide the Email '<UserName>' in the Email field
    And provide the Password '<Password>' in the Password field
    When click on the Sign In button
    When Mouse hover on the left navigation bar and click on the Track Shipments option
    Then The user should be able to navigate into the Track Shipments page
    And Enter the Waybill number in tracking number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
    Then Click on the Track button
    And user captures Booked date & from and To details

    Examples:
      | UserName              | Password | FileName  | sheetname | Rowno | columnno |
      | shaikhrehan@esspl.com | Test@123 | data.xlsx | dummy     | 3     | 5        |

  @trackShipmentCE
  Scenario Outline:  Verify the View And Track functionality[CE_VT_01]
    Then login into Core Engine
    And provide the Email '<UserName>' in the Email field
    And provide the Password '<Password>' in the Password field
    When click on the Sign In button
    And Mouse hovers and Clicks on View and Track
    And clicks on Operation
    Then Enters the Waybill number in Waybill No field '<FileName>', '<sheetName>'
    And Clicks on Track button
    Then Captures Booked date & from and To details
    And user verifies booking details

    Examples:
      | UserName          | Password | FileName  | sheetName | Rowno | columnno |
      | santosh@esspl.com | Test@123 | data.xlsx | dummy     | 3     | 5        |