@UpdateDRS
Feature: Update DRS for successful delivery

# @UpdateDRS1
#     Scenario Outline: Log in to CE successfully
#         Given Login into Core Engine
#         And Provide the Email '<UserName>' in the Email field
#         And Provide the Password '<Password>' in the Password field
#         And Click on the Sign In button

#         Examples:
#             | UserName          | Password |
#             | santosh@esspl.com | Test@123 |

    @DRSSCAN
    Scenario Outline: Verify DRS SCAN
        #And Mouse hover on the left side of the page and click on Delivery Module
        And click on DRS SCAN
        And select vehicle number from dropdown '<vehicle>'
        And click on next button
        And select courier from dropdown '<courier>'
        And enter starting KMs in '<KMs>' field
        And click on next
        And enter waybill number '<FileName>','<sheetName>',<Row>,<column>
        # And enter waybill number '<waybill>'
        And click on add icon
        And click on create button
        And Enter Branch code in '<branch code>' field
        And click on ok button
        When click on create button
        # Then fetch DRS number from the popup  '<FileName>','<sheetName>',<Rowno>,<columnno>
        Then fetch DRS number
        Then enter waybill number in waybill field  '<FileName>','<sheetName>',<Rowno>,<columnno>
        Then fetch DRS number from grid '<FileName>','<sheetName>',<Rownoo>,<columnnoo>


        Examples:
            | waybill         | vehicle | courier    | KMs | branch code | FileName  | sheetName | Row | column | Rowno | columnno |Rownoo|columnnoo|
            | ZND163963271488 | ABC123  | 1037(1037) | 12  | DSML        | data.xlsx | dummy     | 2   | 5      | 2     | 5        |4     |4        |

    # @ManageDRS
    # Scenario: Verify Manage DRS
    #     And Mouse hover on the left side of the page and click on Delivery Module
    #     And click on Manage DRS
    #     #And click on Assignview tab
    #     When enter waybill number '<FileName>','<sheetName>',<Row>,<column>
    #     Then fetch DRS number from the grid '<FileName>','<sheetName>',<Rowno>,<columnno>

    #     Examples:
    #         | FileName  | sheetName | Row | column | Rowno | columnno |
    #         | data.xlsx | dummy     | 2   | 5      | 2     | 7        |



    @UpdateDRS2
    Scenario Outline: Verify Update DRS for successful delivery
        #And Mouse hover on the left side of the page and click on Delivery Module
        And Click on Update DRS
        And Enter DRS Number in the DRSNumber field '<FileName>','<sheetName>',<Rowno>,<columnno>
        And Click on New button
        And click on action button
        And Click on the update button
        And Enter Branch code in '<branch code>'
        And Select '<status>' from the dropdown
        And Enter IC number
        And Enter Remark in '<remark>'
        And Enter Receiver Person name in '<name>'
        And Click on edit icon to upload POD '<file>'
        When Click on edit icon to upload Signature '<fileName>'
        Then Click on Update Item button

        Examples:
            | branch code | status    | remark  | name  | file            | fileName        | FileName  | sheetName | Rowno | columnno |
            | DSML        | Delivered | success | chinu | profile_pic.png | profile_pic.png | data.xlsx | dummy     | 4     | 4        |

# Undelivered