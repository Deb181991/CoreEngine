@addressBook
Feature: Verify the Address Book Functionality

    @addressBook1
    Scenario Outline:  Verify Address Book with Valid information[OMS_AB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        And Provide the name in the '<Company Name>' field
        And Provide the person name in the '<Contact Person>' field
        And Provide the number in the '<Phone Number>' field
        And Provide the Email in the '<Email>' field
        And Enter the '<Post Code>'
        And Check whether '<State>' and '<City>' data is fetched or not
        And Enter the '<Building/Unit>' number
        And Enter the text in the Address '<Address>' field
        And Click on the Address2  dropdown '<Address2>' and select option from it
        And Check whether '<Country>' is displayed in the Country field
        And Provide the mobile number in the '<Mobile Number>' field
        And Check whether the Delivery Address is displayed as selected in the '<Address Category>' drop down
        When Click on the Save button
        Then User should be able to view the newly created address '<Company Name>'

        Examples:
            | Company Name   | Contact Person | Phone Number | Email           | Post Code | State        | City         | Address         | Address2     | Mobile Number | Building/Unit | Country  | Address Category |
            | Rehan Solution | Rehan          | 9040889409   | rehan@gmail.com | 50000     | Kuala Lumpur | Kuala Lumpur | Selangor square | Pukit Sqaure | 895659898     | 85            | Malaysia | Delivery Address |
            | Rehan Solution | Suraj          | 9040889409   | suraj@gmail.com | 42200     | Selangor     | Kapar        | Selangor square | Pukit Sqaure | 895659898     | 850           | Malaysia | Delivery Address |
            | Rehan Solution | Jatin          | 9040889401   | jatin@gmail.com | 01000     | Perlis       | Kangar       | Selangor square | Pukit Sqaure | 895659898     | 851           | Malaysia | Delivery Address |

    @addressBook2
    Scenario Outline:  Verify Address Book validation for Company Name[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the name in the '<Company Name>' field
        Then The User should be able to enter the name "<Company Name>"

        Examples:
            | Company Name   |
            | Rehan Solution |

    @addressBook3
    Scenario Outline:  Verify Address Book validation for Contact Person[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the person name in the '<Contact Person>' field
        Then The User should be able to enter the person name '<Contact Person>'

        Examples:
            | Contact Person |
            | 154545         |

    @addressBook4
    Scenario Outline:  Verify Address Book validation for invalid Phone Number[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the invalid data in the Phone Number field '<Phone Number>'
        Then '<Alert>' message should be displayed to the user for phone number field

        Examples:
            | Phone Number     | Alert                                     |
            | 9045656565655655 | Phone number must be a valid phone number |

    @addressBook5
    Scenario Outline:  Verify Address Book validation for invalid Email[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the invalid data in the Email field '<Email>'
        Then '<Alert>' message should be displayed to the user for Email field

        Examples:
            | Email          | Alert                  |
            | rehangmail.com | Invalid Email address. |

    @addressBook6
    Scenario Outline:  Verify Address Book validation for invalid State[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the invalid data in the state field '<State>'
        Then '<Alert>' message should be displayed to the user for state field

        Examples:
            | State  | Alert          |
            | Punjab | Invalid State. |

    @addressBook7
    Scenario Outline:  Verify Address Book validation for invalid City[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the invalid data in the city field '<City>'
        Then '<Alert>' message should be displayed to the user for city field

        Examples:
            | City  | Alert         |
            | Delhi | Invalid City. |

    @addressBook8
    Scenario Outline:  Verify Address Book validation for Building Unit[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Enter the '<Building Unit>' number
        Then Building number should be entered and displayed '<Building Unit>'

        Examples:
            | Building Unit |
            | 85            |

    @addressBook9
    Scenario Outline:  Verify Address Book validation for address[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Enter the text in the Address '<Address>' field
        Then Text should be entered and displayed '<Address>'

        Examples:
            | Address         |
            | Selangor square |

    @addressBook10
    Scenario Outline:  Verify Address Book validation for address2[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Click on the Address2  dropdown '<Address2>' and select option from it
        Then Option should be selected and displayed '<Address2>'

        Examples:
            | Address2     |
            | Pukit Sqaure |

    @addressBook11
    Scenario Outline:  Verify Address Book validation for country[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        When Click on the Create Address icon
        Then Check whether '<Country>' is displayed in the Country field

        Examples:
            | Country  |
            | Malaysia |

    @addressBook12
    Scenario Outline:  Verify Address Book validation for invalid mobile[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        When Provide the invalid data in the Mobile field '<Mobile>'
        Then '<Alert>' message should be displayed to the user for mobile field

        Examples:
            | Mobile           | Alert                                       |
            | 8956598985565565 | Mobile number must be a valid mobile number |

    @addressBook13
    Scenario Outline:  Verify Address Book validation for category[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        When Click on the Create Address icon
        Then Check whether the Delivery Address is displayed as selected in the '<Address Category>' drop down

        Examples:
            | Address Category |
            | Delivery Address |

    @addressBook14
    Scenario Outline:  Verify Address Book validation for Company Name[OMS_AB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Create Address icon
        And Provide the name in the '<Company Name>' field
        And Provide the person name in the '<Contact Person>' field
        And Provide the invalid data in the Phone Number field '<Phone Number>'
        And Provide the invalid data in the Email field '<Email>'
        And Provide the invalid data in the state field '<State>'
        And Provide the invalid data in the city field '<City>'
        And Enter the '<Building/Unit>' number
        And Enter the text in the Address '<Address>' field
        And Click on the Address2  dropdown '<Address2>' and select option from it
        And Provide the invalid data in the Mobile field '<Mobile>'
        When Click on the Save button
        Then User should not be able to create address and alert message should be displayed '<Alert Phone>','<Alert Email>','<Alert State>','<Alert City>','<Alert Mobile>'

        Examples:
            | Company Name   | Contact Person | Phone Number     | Email          | State  | City  | Building/Unit | Address         | Address2     | Mobile           | Alert Phone                               | Alert Email            | Alert State    | Alert City    | Alert Mobile                                |
            | Rehan Solution | 154545         | 9045656565655655 | rehangmail.com | Punjab | Delhi | 85            | Selangor square | Pukit Sqaure | 8956598985565565 | Phone number must be a valid phone number | Invalid Email address. | Invalid State. | Invalid City. | Mobile number must be a valid mobile number |

    @addressBook15
    Scenario Outline:  Verify download Address Book template successfully[OMS_AB_03]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Import Address icon
        When Click on the Template download option
        Then Template should be downloaded successfully '<Downloaded File Name>'

        Examples:
            | Downloaded File Name       |
            | address_book_template.xlsx |

    @addressBook16
    Scenario Outline:  Verify Import Address Book successfully with confirmation message[OMS_AB_03]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Import Address icon
        And Click on the Template download option
        And Select the file to upload '<File Name>'
        When Click on the Submit button
        Then File should be imported successfully with a confirmation message '<Confiramtion Message>'

        Examples:
            | File Name                        | Confiramtion Message             |
            | address_book_template_valid.xlsx | Addresses imported successfully. |

    @addressBook17
    Scenario Outline:  Verify Import Address Book successfully[OMS_AB_03]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Import Address icon
        And Click on the Template download option
        And Select the file to upload '<File Name>'
        When Click on the Submit button
        Then Check the imported address is reflected in the grid list '<Company Name>','<File Name>','<Sheet Name>',<Row Num>,<Column Num>

        Examples:
            | File Name                        | Company Name   | Sheet Name   | Row Num | Column Num |
            | address_book_template_valid.xlsx | Jatin Solution | address-book | 2       | 1          |

    @addressBook18
    Scenario Outline:  Verify Import Address Book Import Address Book with invalid import template.[OMS_AB_04]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Address option of left panel and click on the Address Book option
        And Click on the Import Address icon
        And Click on the Template download option
        And Select the file to upload '<File Name>'
        When Click on the Submit button
        Then Proper error message should be displayed and file should not be uploaded '<Error Message>'

        Examples:
            | File Name                          | Error Message                             |
            | address_book_template_invalid.xlsx | Import operation failed. Try again later. |