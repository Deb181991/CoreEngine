@CE_Offline_Online_Lodggin
Feature: Create CE Offline/Online Lodggin

@loginCE
  Scenario Outline: Verify User can login with valid credentials only[CE_LOG_3]
    Then Login into Core Engine
    And Provide the Email '<UserName>' in the Email field
    And Provide the Password '<Password>' in the Password field
    When Click on the Sign In button

    Examples:
      | UserName          | Password | 
      | santosh@esspl.com | Test@123 | 

@Offline_Lodggin
  Scenario Outline: Verify waybill for Offline Lodggin[CE_OL_1]
    Then Mouse hover and click on Lodge in
     Then Enter '<Accountnumber>' in account number field
     And Enter waybill number in the Waybill Number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
     Then Enter the '<NOP>' in number piece field
     Then Click on Lodge In icon button
     Then Enter '<Branch>' in the Branch
     Then Click on OK
     Then Click on Lodge In icon button
     
     Examples:
        | FileName  |sheetname  |Rowno|columnno|Branch|Accountnumber                     |NOP|
        | data.xlsx | dummy     | 2   | 9      | DSML |A5100343(DURIE CACTUS ENTERPRISE) |1  |


@Online_Lodggin
  Scenario Outline: Verify waybill for Online Lodggin[CE_OL_1]
     Then Click on Online mode option
     And Enter onlinewaybill number in the online Waybill Number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
     Then Click on Lodge In icon button

    Examples:
        | FileName  |sheetname  |Rowno|columnno|Branch|
        | data.xlsx | dummy     | 2   | 5      | DSML |


@Offline_Lodggin
  Scenario Outline: Verify waybill for track[CE_OL_1]
     And Mouse hovers and Clicks on View and Track
     And clicks on Operation
     Then Enters the TrackWaybill number in Waybill No field for Track '<FileName>', '<sheetname>',<Rowno>,<columnno>
     And Clicks on Track button

    Examples:
        | FileName  |sheetname  |Rowno|columnno|
        | data.xlsx | dummy     | 2   | 9      |
        


@Online_Lodggin
  Scenario Outline: Verify waybill for track[CE_OL_2]
     
     Then Enters the OnlineTrackWaybill number in Waybill No field for Track '<FileName>', '<sheetname>',<Rowno>,<columnno>
     And Clicks on CE Track button

    Examples:
        | FileName  |sheetname  |Rowno|columnno|
        | data.xlsx | dummy     | 2   | 5      |
