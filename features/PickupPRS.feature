@Pickup
Feature: Verify the ManageRPS Functionality

  @Pickup1
  ############################## Manage PRS ##############################
  Scenario Outline:  Verify Manage PRS with Valid information[CE_PRS_01]
    # Then Login into Core Engine
    # And Provide the Email '<UserName>' in the Email field
    # And Provide the Password '<Password>' in the Password field
    # When Click on the Sign In button
    Then Mouse hover on the Pickup option of left panel and click on the Pickup option
    And  Mouse Hover and Click on Manage PRS tab
    And  Mouse Hover and click on PickUp request tab
    And  Provide the  WaybillNumber '<File Name>','<Sheet Name>',<Row Num>,<Column Num> in the Waybill number field
    And  Get the PU number '<File Name>','<Sheet Name>',<Row Num>,<Column Num> from the PU Number field

    Examples:
      | UserName          | Password | File Name | Sheet Name | Row Num | Column Num |
      | santosh@esspl.com | Test@123 | data.xlsx | dummy      | 2       | 5          |


  @Pickup2
  Scenario Outline:  Verify the Create PRS with Valid information[CE_PRS_02]
    When Mouse Hover and Click on Create PRS tab
    Then Provide the BranchCode '<BranchCode>' in the BranchCode field
    And Provide the Customer '<Customer>' in the Customer field
    And Click on Search Button
    And Check the PU '<File Name>','<Sheet Name>',<Row Num>,<Column Num> in field and click checkbox
    And Click on Create and Assign button
    And Click on Select From other Branch
    And Provide the Courier '<Courier>' in the Courier number field
    And Click on Create button
    And Select the branch '<BranchCode>' in the branch code list
    And Click on the OK button
    Then Click on the Create Button
    # Then Verify that the Successful message '<File Name>','<Sheet Name>',<Row Num>,<Column Num> for Create PRS is displayed
    #Then Fetch the Created PRS Number and save it in '<File Name>','<Sheet Name>',<Row Num>,<Column Num>
    Examples:
      | BranchCode | Customer                        | Courier    | File Name | Sheet Name | Row Num | Column Num |
      | DSML       | W3910115000(SHAIKH REHAN AHMED) | 1037(1037) | data.xlsx | dummy      | 2       | 13         |

  @Pickup3
  Scenario Outline:  Verify the Update PRS with Valid information[CE_PRS_03]
    When Mouse Hover and Click on Update PU tab
    And Provide the PU Number '<File Name>','<Sheet Name>',<Row Num>,<Column Num> in the PRS Number field
    And Click on the PU number to view details
    And Click on the action button
    And Click on the Scan button
    And Select the PickuP message from Pickup dropdown
    And Enter the WaybillNumber '<File Name>','<Sheet Name>',<Row Num>,<Column Num> in the Waybill number field
    And Provide the Contact Name '<Contact Name>' in the Contact name Field
    And Provide the Contact IC Number '<Contact IC Number>' in the Contact IC Number Field
    And Upload the Pick Up Proof file '<UploadFilename>' in the Upload Pickup Proof Field
    Then Click on the final submit button

    Examples:
      | File Name | Sheet Name | Row Num | Column Num | UploadFilename  | Contact Name | Contact IC Number |
      | data.xlsx | dummy      | 2       | 5          | profile_pic.png | Ayesha       | 1234              |


