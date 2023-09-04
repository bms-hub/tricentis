import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { insurancePage } from "../../pages/insuranceFormPage";
import { 
    vehicleData, 
    insurantData, 
    productData, 
    sendQuoteData 
} from "../../support/enums";


Given("the browser is at the Vehicle Data form", () => {
    cy.visit('app.php')
})

When("a user finishes filling Enter Vehicle Data form", () => {
    insurancePage.fillVehicleDataForm(vehicleData)

   
})

When("finishes filling Enter Insurant Data form", () => {
    insurancePage.fillInsurantDataForm(insurantData)
})

When("finishes filling Enter Product Data form", () => {
    insurancePage.fillProductDataForm(productData)
})

When("finishes filling Select Price Option", () => {
    insurancePage.fillPriceForm()
})

When("finishes filling Send Quote form", () => {
    insurancePage.fillSendQuoteForm(sendQuoteData)
})

Then("the {string} message should be displayed", (message) => {
    insurancePage.verifyMessage(message)
})