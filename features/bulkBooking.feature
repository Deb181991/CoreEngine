@bulkBooking
Feature: Verify bulk booking with valid and invalid files

    @bulkBooking1
    Scenario:  Verify user can navigate to bulk booking page[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        When Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        Then The user should be able to navigate into the Bulk Booking page

    @bulkBooking2
    Scenario Outline:  Verify user can click at download template[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        When Click on the download link to download the Bulk booking template
        Then User should be able to download the Bulk Booking template '<FileName>'

        Examples:
            | FileName                         |
            | bulk_shipment_template_cash.xlsx |

    @bulkBooking3
    Scenario Outline:  Verify User should be able to navigate the List page[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        When Click on the View button
        Then User should be able to navigate the List page

        Examples:
            | Updated Filename                       |
            | bulk_shipment_template_cash_valid.xlsx |

    @bulkBooking4
    Scenario Outline:  Verify Amount should be calculated and User should be able to view the amount[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        And Click on the View button
        When Click on the Calculate Button
        Then Amount should be calculated and User should be able to view the amount as '<Total Amount>'

        Examples:
            | Updated Filename                       | Total Amount |
            | bulk_shipment_template_cash_valid.xlsx | RM 72.00     |

    @bulkBooking5
    Scenario Outline:  Verify User should be able to navigate to the Payment gateway[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        And Click on the View button
        And Click on the Calculate Button
        When Click on the Pay button
        Then User should be able to navigate to the Payment gateway

        Examples:
            | Updated Filename                       |
            | bulk_shipment_template_cash_valid.xlsx |

    @bulkBooking6
    Scenario Outline:  Verify Create mutliple shipment with Bulk booking functionality[OMS_BB_01]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        And Click on the View button
        And Click on the Calculate Button
        And Click on the Pay button
        When Pay the amount by selecting the Card type and entering the card details
        Then Payment should be successful and Shipment should be create successfully

        Examples:
            | Updated Filename                       |
            | bulk_shipment_template_cash_valid.xlsx |

    @bulkBooking7
    Scenario Outline:  Verify validation message on invalid template[OMS_BB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the download link to download the Bulk booking template
        When Click on the Click to choose file button to upload invalid file '<Updated Filename>'
        Then Invalid template error message should be displayed as '<Error Message>'

        Examples:
            | Updated Filename                       | Error Message                       |
            | bulk_shipment_template_cash_blank.xlsx | Excel Template is Empty             |
            | profile_pic.png                        | Only .xls & .xlsx files are allowed |

    @bulkBooking8
    Scenario Outline: Verify validation message on invalid value in template[OMS_BB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        And Click on the View button
        When Click on the Calculate Button
        Then Invalid template error message should be displayed as '<Error Message>'

        Examples:
            | Updated Filename                         | Error Message                                                                                 |
            | bulk_shipment_template_cash_invalid.xlsx | All rows are not valid! Please check the current or next page to check for any invalid entry. |

    @bulkBooking9
    Scenario Outline: Create Bulk Booking by upload Invalid template and update it with the valid data[OMS_BB_02]
        Given Navigate into the OMS website
        And User can login with valid credentials
        And Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option
        And Click on the Click to choose file button to upload the updated file '<Updated Filename>'
        And Click on the View button
        And Click on the Calculate Button
        And Click on the edit option for first row
        And Update the valid data '<Zipcode>', '<Weight>' in the fields
        And Click on the Save button in update delivery details
        And Click on the edit option for second row
        And Update the valid data '<Zipcode>', '<Weight>' in the fields
        And Click on the Save button in update delivery details
        And Click on the Calculate Button
        And Click on the Pay button
        When Pay the amount by selecting the Card type and entering the card details
        Then Payment should be successful and Shipment should be create successfully

        Examples:
            | Updated Filename                         | Zipcode | Weight |
            | bulk_shipment_template_cash_invalid.xlsx | 17610   | 1      |