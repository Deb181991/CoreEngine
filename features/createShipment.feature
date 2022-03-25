@createShipment
Feature: Create a new shipment and calculate charges

    @createShipment1
    Scenario Outline:  The user should be able to Create Shipment successfully for business user
        Given Navigate into the OMS website
        And Provide the Email '<UserName>' in the Email field
        And Provide the Password '<Password>' in the Password field
        And Click on the Sign In button

        Examples:
            | UserName              | Password |
            | shaikhrehan@esspl.com | Test@123 |

    @createShipment2
    Scenario Outline: Verify create shipment for business user
        And Mouse hover on the Bookings option of left navigation bar and click on the Create Shipment option
        Then user should displayed to '<VTOS>' page
        #And Select the Standard Delivery option
        And Click on the Next Step button
        And Enter the Company Name '<Delivery Company>' in Delivery Section
        And Enter the Name '<Delivery Name>' in Delivery Section
        And Check whether Country '<Country>' is displayed in the Country field in Delivery Section
        And Enter the Post Code '<Postal Code>' in Delivery Section
        And Enter the Building or Unit number '<Building Unit>' in Delivery Section
        And Enter the '<Address>' in the Address field in Delivery Section
        And user Click on the '<Address2>' select option from it in Delivery Section
        And Enter the Email Id '<Email>' in Delivery Section
        And Enter the Mobile number '<Phone>' in Delivery Section
        And Enter the IC number in Delivery Section
        And Click on the Next Step button
        And click on '<service type>' dropdown and select option from it
        And Click on the Shipment Type '<Shipment Type>' dropdown and select option from it
        And Click on the Mode '<Mode>' dropdown and select option from it
        And fetch waybill number from the waybill number field '<FileName>', '<sheetname>',<Rowno>,<columnno>
        And Click on the Next Step button
        And Enter the Quantity '<Quantity>'
        And Enter the Weight '<Weight>'
        And Check whether the '<Packaging Type>' option is displayed in the Packaging Type drop down
        And Enter the Width '<Width>'
        And Enter the Height '<Height>'
        And Enter the Length '<Length>'
        And Upload a file by clicking on the Drop Attachment Here file should be uploaded '<file name>'
        And Click on the Next Step button
        #And Verify the Amount '<Amount>' displayed in the Charges section 
        #And Click on the Next Step button of summary
        And Click on submit button
        And Click on close button of the popup
        And Mouse hover on the Shipment Management option of left navigation bar and click on it
        And click on waybill number field '<FileName>', '<sheetname>', <Rowno>,<columnno>
        And Click on Search button
        And verify the status in the '<grid>'


        Examples:
           | VTOS             | Delivery Company | Delivery Name | Country  | Postal Code | State    | City        | Building Unit | Address | Address2    | Email            | Phone     | Shipment Type | Mode   | service type        | Quantity | Weight | Packaging Type   | Width | Height | Length | Amount | file name       | grid         | FileName  | sheetname | Rowno | columnno |
           | Types of Services| ABCD             | chinu         | Malaysia | 55555       | Selangor | Subang Jaya | 50            | BBSR    | Subang Jaya | abc123@gmail.com | 943951168 | Package       | Pickup | ST00000050(ST000050)| 1        | 10     | Standard Package | 5     | 5      | 5      | 14.63  | profile_pic.png | Order Placed | data.xlsx | dummy     | 2    | 5         |

    
    # @createShipment3
    # Scenario Outline:  The user should be able to Create Shipment successfully for personal user
    #     Given Navigate into the OMS website
    #     And Provide the Email '<UserName>' in the Email field
    #     And Provide the Password '<Password>' in the Password field
    #     And Click on the Sign In button
    #     Examples:
    #         | UserName             | Password |
    #         | chinmayeer@esspl.com | Test@123 |
    # @createShipment4
    # Scenario Outline: verify create shipment for personal user
    #     And Mouse hover on the Bookings option of left navigation bar and click on the Create Shipment option
    #     And Select the Standard Delivery option
    #     And Click on the Next Step button
    #     And Enter the Company Name '<Delivery Company>' in Delivery Section
    #     And Enter the Name '<Delivery Name>' in Delivery Section
    #     And Check whether Country '<Country>' is displayed in the Country field in Delivery Section
    #     And Enter the Post Code '<Postal Code>' in Delivery Section
    #     And Enter the Building or Unit number '<Building Unit>' in Delivery Section
    #     And Enter the '<Address>' in the Address field in Delivery Section
    #     And user Click on the '<Address2>' select option from it in Delivery Section
    #     And Enter the Email Id '<Email>' in Delivery Section
    #     And Enter the Mobile number '<Phone>' in Delivery Section
    #     And Enter the IC number in Delivery Section
    #     And Click on the Next Step button
    #     And click on '<service type>' and select option from it
    #     #And Click on the Shipment Type '<Shipment Type>' dropdown and select option from it
    #     And Click on the Mode '<Mode>' dropdown and select option from it
    #     And Click on the Next Step button
    #     And Enter the Quantity '<Quantity>'
    #     And Enter the Weight '<Weight>'
    #     And Check whether the '<Packaging Type>' option is displayed in the Packaging Type drop down
    #     And Enter the Width '<Width>'
    #     And Enter the Height '<Height>'
    #     And Enter the Length '<Length>'
    #     And Upload a file by clicking on the Drop Attachment Here file should be uploaded '<file name>'
    #     And Click on the Next Step button
    #     And fetch waybill number from the summary waybill '<FileName>', '<sheetname>',<Rowno>,<columnno>
    #    # And Verify the '<Amount>' displayed in the Charges section 
    #     And click on pay button
    #     And select bank from the dropdown '<bank>'
    #     And click on proceed with bank button
    #     And click on the Shipment Management option
    #     And click on waybill number field '<FileName>', '<sheetname>', <Rowno>,<columnno>
    #     And Click on Search button
    #     And verify the status in the '<grid>'



    #     Examples:
    #         | Delivery Company | Delivery Name | Country  | Postal Code | State    | City        | Building Unit | Address | Address2 | Email            | Phone     | service type | Shipment Type | Mode               | Quantity | Weight | Packaging Type  | Width | Height | Length | Amount | file name       | bank       | grid         | FileName | sheetname | Rowno | columnno |
    #         | ABCD             | chinu         | Malaysia | 55555       | Selangor | Subang Jaya | 50            | BBSR    | Cheras   | abc123@gmail.com | 943951168 | EXPRESSS01   |  Package      | Lodge In / Walk In | 1        | 10     | Standard Package | 5    | 5      | 5      | 13.80  | profile_pic.png | Affin bank | Order Placed | data.xlsx | dummy     | 2    | 5        |


