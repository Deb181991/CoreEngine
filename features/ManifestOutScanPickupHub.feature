@manifestOutScanPickUpHub
Feature: Verify  manifest Out Scan at PickUp hub

    @manifestOutPickUpHub1
    Scenario Outline:  Verify  manifest Out Scan at PickUp hub
        # And Login into Core Engine
        # And Provide the Email '<UserName>' in the Email field
        # And Provide the Password '<Password>' in the Password field
        # And Click on the Sign In button
        And Mousehover and click on Manifest on the left navigation bar
        And Click on Manifest Out Scan Pickup hub
        And Select '<service>' type from Service Type Dropdown
        And Enter '<CageId>' number in CageId textfield
        And Enter '<Next Hub>' Code in Next Hub Code textfield
        #And Enter '<Bag Seal>' number in Bag Seal textfield
        And Enter Bag Seal number in Bag Seal textfield '<FileName>','<sheetName>',<Rowno1>,<columnno1>
        And save the Bag Seal number '<FileName>','<sheetName>',<Rowno2>,<columnno2>
        And Enters the Waybill number in Waybill No field '<FileName>','<sheetName>',<Rowno>,<columnno>
        And Click on submit
        And enter branch code and click ok '<branch>'
        # And verify success message '<Bag Seal>','<FileName>','<sheetName>',<Rowno1>,<columnno1>
        # And User Mousehover and click on View and Track on left navigation bar
        # And User click on Operation
        # And Enters the Waybill number in Waybill No field in operation page '<FileName>','<sheetName>',<Rowno>,<columnno>
        # And move to View and track page
        # And Enters the Waybill number in Waybill No field in operation page '<FileName>','<sheetName>',<Rowno>,<columnno>
        When click on the Track button
        Then manifest '<status>' of the shipments should be completed

        Examples:
            | UserName          | Password | service | CageId   | Next Hub | Bag Seal          | FileName  | sheetName | Rowno | columnno |Rowno1|columnno1 |Rowno2|columnno2 | branch | status                                    | Rowno1 | columnno1 |
            | santosh@esspl.com | Test@123 | 2       | 12345678 | DSML     | ZND1640365448293a | data.xlsx | dummy     | 2     | 5        |2     | 2        |2     | 17       | DSML   | Manifest Out Scan completed at Pickup Hub | 2      | 14        |






