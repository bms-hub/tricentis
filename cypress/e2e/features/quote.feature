Feature: Quotation

    Feature Send Quotation will only be work after filling in all mandatory fields of the previous forms.

    Background:
        Given the browser is at the Vehicle Data form 
    Scenario: Send a Quote
        When a user finishes filling Enter Vehicle Data form
        And finishes filling Enter Insurant Data form
        And finishes filling Enter Product Data form
        And finishes filling Select Price Option
        And finishes filling Send Quote form
        Then the "Sending e-mail success!" message should be displayed  