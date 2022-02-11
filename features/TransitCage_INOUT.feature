@CE_Offline_Online_Lodggin
Feature: Create Transit Cage IN/OUT

@loginCE
  Scenario Outline: Verify User can login with valid credentials only[CE_LOG_3]
    Then Login into Core Engine
    And Provide the Email '<UserName>' in the Email field
    And Provide the Password '<Password>' in the Password field
    When Click on the Sign In button

    Examples:
      | UserName          | Password | 
      | santosh@esspl.com | Test@123 | 

@TransitcagedIn
  Scenario Outline: Verify Transit caged In[CE_MTCIN_2]
    Then Mouse hover and click on Manifest
    Then click on Transit Cage In Scan
    And Select scan category from dropdown box
    And Enter ManifestNumber in Manifest field '<FileName>', '<sheetname>',<Rowno>,<columnno>
    Then Click on scan button
     
     Examples:
        | FileName  |sheetname  |Rowno|columnno|
        | data.xlsx | dummy     | 2   | 11     |
@Tracking
  Scenario Outline: Verify Transit caged In[CE_MTCIN_2]


@TransitcagedOut
  Scenario Outline: Verify Transit caged Out[CE_MTCO_1]
    #Then Mouse hover and click on Manifest
    Then click on Transit Cage Out Scan
    And Select scan category from dropdown box
    And Enter ManifestNumber in Manifest field '<FileName>', '<sheetname>',<Rowno>,<columnno>
    Then Click on scan button
     
     Examples:
        | FileName  |sheetname  |Rowno|columnno|
        | data.xlsx | dummy     | 2   | 11     |

