@manifestInScanPickUpHub
Feature: Verify  manifest In Scan at PickUp Hub

    @manifestInPickUpHub1
    Scenario Outline:  Verify  manifest In Scan at PickUp Hub
        # And Login into Core Engine
        # And Provide the Email '<UserName>' in the Email field
        # And Provide the Password '<Password>' in the Password field
        # And Click on the Sign In button
        #And Mousehover and click on Manifest on the left navigation bar
        And Click on Manifest In Scan Pickup Hub
        And Select manifest number from Scan Catagory Dropdown
        And Enter bag seal number in Manifest textfield '<FileName>','<sheetName>',<Rowno1>,<columnno1>
        And Click on Scan button
        When User click on Track button
        Then manifest '<status>' of the shipments should be completed


        Examples:
            | UserName          | Password | FileName  | sheetName | Rowno | columnno | status                                   |  Rowno1  | columnno1 |
            | santosh@esspl.com | Test@123 | data.xlsx | dummy     | 2     | 5        | Manifest In Scan completed at Pickup Hub |   2      | 16        |