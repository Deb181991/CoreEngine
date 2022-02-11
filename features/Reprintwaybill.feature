@ReprintWaybill
Feature: Verify the Reprint Waybill functionality

    @ReprintWaybill1
    Scenario Outline:  Verify the Reprint Waybill functionality [OMS_RW_01]
        Given navigate into OMS website
        And provide Email '<UserName>' in the Email field
        And provide Password '<Password>' in the Password field
        When click on Sign In button
        # When User Mouse hovers on the left navigation bar and click on the Reprint Waybill option
        # Then user should be able to navigate into the Reprint Waybill page
        # And Enters the Waybill number in tracking number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
        # Then User Clicks on the Print Waybill button
        # And User selects Standard Delivery from the Shipment service dropdown
        # And Enters the Waybill number in tracking number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
        # And Clicks on the Search button
        # Then user Clicks on print icon
        When user Mousehovers and clicks on Shipment management
        Then enters reference number And waybill number
        And User clicks on the Search button
        Then Clicks on the Elipsis icon and clicks on view option

        Examples:
            | UserName              | Password | FileName  | sheetname | Rowno | columnno |
            | shaikhrehan@esspl.com | Test@123 | data.xlsx | dummy     | 3     | 5        |