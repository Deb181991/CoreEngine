@login
Feature: User can login with valid credentials

# @login1
#   Scenario: Verify Navigation to the OMS website[OMS_LOG_01]
#     Given Navigate into the OMS website
#     Then The user should be able to navigate into the login page


#   @loginPU
#   Scenario Outline: Verify User can login with valid credentials only[OMS_LOG_1]
#     Given Navigate into the OMS website
#     And Provide the Email '<UserName>' in the Email field
#     And Provide the Password '<Password>' in the Password field
#     #When Click on the Sign In button
#     # Then Click on the Profile button
#     # Then Click on the Sign Out button


#     Examples:
#       | UserName         | Password |
#       | ayasam@esspl.com | Test@123 |



  @loginCE
  Scenario Outline: Verify User can login with valid credentials only[CE_LOG_3]
    Then Login into Core Engine
    And Provide the Email '<UserName>' in the Email field
    # Then Check the waybill '<File Name>','<Sheet Name>',<Row Num>,<Column Num>
    # Then write outcome data '<File Name>','<Sheet Name>',<Row Num>,<Column Num>
    And Provide the Password '<Password>' in the Password field
    When Click on the Sign In button


    Examples:
      | UserName          | Password | File Name | Sheet Name   | Row Num | Column Num |
      | santosh@esspl.com | Test@123 | data.xlsx | dummy        | 3       | 2          |
            
            

  # @loginBU
  # Scenario Outline: Verify User can login with valid credentials only[OMS_LOG_2]
  #   Given Navigate into the OMS website
  #   And Provide the Email '<UserName>' in the Email field
  #   And Provide the Password '<Password>' in the Password field
  #   When Click on the Sign In button

  #   Examples:
  #      | UserName              | Password |
  #      | shaikhrehan@esspl.com | Test@123 |
