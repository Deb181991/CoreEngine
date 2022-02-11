@CheckinScanWaybill
Feature: validate checkin Scan waybill of pickup Hub functionality




 @checkinScanPickupHub
    Scenario Outline: Verify the Checkin Scan Pickup Hub functionality of CoreEngine
        #  And Login into Core Engine
        # And Provide the Email '<UserName>' in the Email field
        # And Provide the Password '<Password>' in the Password field
        # And Click on the Sign In button
        #Then User can login with valid credentials and should navigate to 'Core Engine' page
         When User Mousehover and click on Booking option of left navigation bar
         Then all the sub-options should be displayed under Booking
        When User click on Checkin Scan Pickup Hub Module
        Then User should be navigated to 'Checkin Scan Pickup Hub' pickup page
        When User provide valid Waybill Number in the waybill number textfield and press enter '<FileName>', '<sheetname>', <Rowno>,<columnno>
        Then a popup should be displayed asking for Branch Code
        When Select the '<branch code>' in the Branch Code dropdown
        Then The User should be able to select the Branch Code from dropdown
        When User click on ok and again click on + icon present on that page
        Then The waybill should be scanned successfully and a successful popup should be displayed
        # When User Mousehover and click on View and Track on left navigation bar,'Operation' submenu should displayed to User
        # When User click on Operation
        # Then User should navigate to 'Operation' Page
        # When User provide Waybill Number in the Waybill number textfield  '<FileName>', '<sheetname>', <Rowno>,<columnno>
        When User click on the Track button
        Then checkin '<status>' of the shipments should be completed

        Examples:
            | UserName          | Password | branch code | status                   | FileName  | sheetname | Rowno | columnno |
            | santosh@esspl.com | Test@123 | DSML        | Checked In at Pickup Hub | data.xlsx | dummy     | 2     | 5        |

