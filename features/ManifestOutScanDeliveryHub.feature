@manifestOutScanDeliveryHub
Feature: Verify  manifest Out Scan at Delivery hub

    @manifestOutDeliveryHub1
    Scenario Outline:  Verify  manifest Out Scan at Delivery hub
        # And Login into Core Engine
        # And Provide the Email '<UserName>' in the Email field
        # And Provide the Password '<Password>' in the Password field
        # And Click on the Sign In button
        And Mousehover and click on Manifest on the left navigation bar
        And Click on Manifest Out Scan Delivery hub
        And Select '<service>' type from Service Type Dropdown
        And Enter '<CageId>' number in CageId textfield
        And Enter '<Next branch>' Code in Next branch Code textfield
       # And Enter '<Bag Seal>' number in Bag Seal textfield
        And Enter Bag Seal number in Bag Seal textfield '<FileName>','<sheetName>',<Rowno1>,<columnno1>
        And save the Bag Seal number '<FileName>','<sheetName>',<Rowno2>,<columnno2>
        And Enters the Waybill number in Waybill No field '<FileName>','<sheetName>',<Rowno>,<columnno>
        And Click on submit
        And enter branch code and click ok '<branch>'
        #And verify success message '<Bag Seal>','<FileName>','<sheetName>',<Rowno1>,<columnno1>
        # And move to View and track page
        # And Enters the Waybill number in Waybill No field in operation page '<FileName>','<sheetName>',<Rowno>,<columnno>
        # When User click on Track button
        # # And User Mousehover and click on View and Track on left navigation bar
        # And User click on Operation
        # And Enters the Waybill number in Waybill No field in operation page '<FileName>','<sheetName>',<Rowno>,<columnno>
        When click on the Track button
        Then manifest '<status>' of the shipments should be completed

        Examples:
            | UserName          | Password | service | CageId   | Next branch | Bag Seal      | FileName  | sheetName | Rowno | columnno |Rowno1| columnno1|Rowno2| columnno2| branch | status                                      | Rowno1 | columnno1 |
            | santosh@esspl.com | Test@123 | 2       | 12345678 | DSML     | ZND164036544a | data.xlsx | dummy     | 2     | 5        |2     | 2        |2     | 18       | DSML   | Manifest Out Scan completed at Delivery Hub | 2      | 15        |






