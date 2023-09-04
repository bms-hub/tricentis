import dayjs from "dayjs";

class InsurancePage {
    vehicleDataElements = {
      makeInput: () => cy.get("#make"),
      modelInput: () => cy.get("#model"),
      cylinderCapacityInput: () => cy.get("#cylindercapacity"),
      enginePerformanceInput: () => cy.get('#engineperformance'),
      dateInput: () => cy.get('#dateofmanufacture'),
      numberOfSeatsInput: () => cy.get('#numberofseats'),
      righHandYesOption: () => cy.get('#righthanddriveyes'),
      righHandNoOption: () => cy.get('#righthanddriveno'),
      motorcycleSeatsInput: () => cy.get('#numberofseatsmotorcycle'),
      fuelInput: () => cy.get('#fuel'),
      payloadInput: () => cy.get('#payload'),
      totalWeightInput: () => cy.get('#totalweight'),
      listPriceInput: () => cy.get('#listprice'),
      licensePlateNumberInput: () => cy.get('#licenseplatenumber'),
      annualMileageInput: () => cy.get('#annualmileage'),
      nextBtn: () => cy.get('#nextenterinsurantdata')
    };

    insurantDataElements = {
        firstNameInput: () => cy.get("#firstname"),
        lastNameInput: () => cy.get("#lastname"),
        birthDateInput: () => cy.get("#birthdate"),
        countryInput: () => cy.get('#country'),
        zipCodeInput: () => cy.get('#zipcode'),
        occupationInput: () => cy.get('#occupation'),
        speedingOption: () => cy.get('#speeding'),
        bungeeJumpingOption: () => cy.get('#bungeejumping'),
        cliffDivingOption: () => cy.get('#cliffdiving'),
        otherOption: () => cy.get('#other'),
        nextBtn: () => cy.get('#nextenterproductdata'),
    };

    productDataElements = {
        startDateInput: () => cy.get("#startdate"),
        insuranceSumInput: () => cy.get("#insurancesum"),
        meritRatingInput: () => cy.get("#meritrating"),
        damageInsuranceInput: () => cy.get('#damageinsurance'),
        euroProtectionOption: () => cy.get('#EuroProtection'),
        legalDefenseInsuranceOption: () => cy.get('#LegalDefenseInsurance'),
        courtesyCarInput: () => cy.get('#courtesycar'),
        nextBtn: () => cy.get('#nextselectpriceoption')
    };

    priceOptionElements = {
        silverOption: () => cy.get("#selectsilver"),
        goldOption: () => cy.get("#selectgold"),
        platinumOption: () => cy.get("#selectplatinum"),
        ultimateOption: () => cy.get('#selectultimate'),
        nextBtn: () => cy.get('#nextsendquote')
    };

    sendQuoteElements = {
        emailInput: () => cy.get("#email"),
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        confirmPasswordInput: () => cy.get('#confirmpassword'),
        commentsInput: () => cy.get("#Comments"),
        sendBtn: () => cy.get('#sendemail'),
        confirmationMessage: () => cy.get('.sweet-alert h2')
    };
  
    fillVehicleDataForm(vehicleData) {
      this.vehicleDataElements.makeInput().select(vehicleData[0]);
      this.vehicleDataElements.modelInput().select(vehicleData[1]);
      this.vehicleDataElements.cylinderCapacityInput().type(vehicleData[2]);
      this.vehicleDataElements.enginePerformanceInput().type(vehicleData[3]);
      this.vehicleDataElements.dateInput().type(vehicleData[4]);
      this.vehicleDataElements.numberOfSeatsInput().select(vehicleData[5]);
      this.vehicleDataElements.motorcycleSeatsInput().select(vehicleData[6]);
      this.vehicleDataElements.fuelInput().select(vehicleData[7]);
      this.vehicleDataElements.payloadInput().type(vehicleData[8]);
      this.vehicleDataElements.totalWeightInput().type(vehicleData[9]);
      this.vehicleDataElements.listPriceInput().type(vehicleData[10]);
      this.vehicleDataElements.licensePlateNumberInput().type(vehicleData[11]);
      this.vehicleDataElements.annualMileageInput().type(vehicleData[12]);
      this.vehicleDataElements.nextBtn().click();
    }

    fillInsurantDataForm(insurantData) {
        this.vehicleDataElements.firstNameInput().type(insurantData[0]);
        this.vehicleDataElements.lastNameInput().type(insurantData[1]);
        this.vehicleDataElements.birthDateInput().type(insurantData[2]);
        this.vehicleDataElements.countryInput().select(insurantData[3]);
        this.vehicleDataElements.zipCodeInput().type(insurantData[4]);
        this.vehicleDataElements.occupationInput().select(insurantData[5]);
        this.vehicleDataElements.otherOption().click();
        this.vehicleDataElements.nextBtn().click();
    }

    fillProductDataForm(productData) {
        this.productDataElements.startDateInput().type(dayjs().add(2, 'M').format('MM/DD/YYYY'));
        this.productDataElements.insuranceSumInput().select(productData[0]);
        this.productDataElements.meritRatingInput().select(productData[1]);
        this.productDataElements.damageInsuranceInput().select(productData[2]);
        this.productDataElements.euroProtectionOption().click();
        this.productDataElements.courtesyCarInput().select(productData[3]);
        this.productDataElements.nextBtn().click();
    }

    fillPriceForm() {
        this.priceOptionElements.ultimateOption().click();
        this.priceOptionElements.nextBtn().click();
    }

    fillSendQuoteForm(sendQuote) {
        this.sendQuoteElements.emailInput().type(sendQuote[0]);
        this.sendQuoteElements.usernameInput().type(sendQuote[1]);
        this.sendQuoteElements.passwordInput().type(sendQuote[2]);
        this.sendQuoteElements.confirmPasswordInput().type(sendQuote[2]);
        this.sendQuoteElements.sendBtn().click();
    }

    verifyMessage(message){
        this.sendQuoteElements.confirmationMessage().should('have.text', message)
    }
  }
  
  export const insurancePage = new InsurancePage();