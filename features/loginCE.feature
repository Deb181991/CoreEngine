@login
Feature: User can login with valid credentials

  @loginCE
  Scenario Outline: Verify User can login with valid credentials only[CE_LOG_3]
    Then Login into Core Engine
    And Provide the Email '<UserName>' in the Email field
    And Provide the Password '<Password>' in the Password field
    When Click on the CE Sign In button
    #And verify '<pickup>'


    Examples:
      | UserName         | Password | File Name | Sheet Name   | Row Num | Column Num |pickup|
      | santosh@esspl.com| Test@123 | data.xlsx | dummy        | 3       | 2          |Pickup|
            
            
