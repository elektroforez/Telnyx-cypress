import { th } from "@faker-js/faker/.";

class ContactPage {
  elements = {
    helpSelect: () => cy.get("#Reason_for_Contact__c"),
    firstNameInput: () => cy.get("#FirstName"),
    lastNameInput: () => cy.get("#LastName"),
    businessEmailInput: () => cy.get("#Email"),
    countrySelect: () => cy.get("#Phone_Number_Extension__c"),
    phoneInput: () => cy.get("#Phone_Number_Base__c"),
    companyWebsiteInput: () => cy.get("#Website"),
    requestInput: () => cy.get("#Form_Additional_Information__c"),
    aboutInput: () => cy.get("#How_did_you_hear_about_Telnyx_Open__c"),
    productInterestSelect: () => cy.get("#Form_Product__c"),
    budgetSelect: () => cy.get("#Form_Budget__c"),
    submitButton: () => cy.get("button[type='submit']"),

    helpErrorMsg: () => cy.get("#ValidMsgReason_for_Contact__c"),
    nameErrorMsg: () => cy.get("#ValidMsgFirstName"),
    lastNameErrorMsg: () => cy.get("#ValidMsgLastName"),
    emailErrorMsg: () => cy.get("#ValidMsgEmail"),
    websiteErrorMsg: () => cy.get("#ValidMsgWebsite"),
    requestErrorMsg: () => cy.get("#ValidMsgForm_Additional_Information__c"),
    aboutErrorMsg: () =>
      cy.get("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c"),
    productErrorMsg: () => cy.get("#ValidMsgForm_Product__c"),
    budgetErrorMsg: () => cy.get("#ValidMsgForm_Budget__c"),
  };

  visit() {
    cy.visit("/contact-us");
  }

  selectHelpOption(option: string) {
    this.elements.helpSelect().select(option);
  }

  fillFirstName(name: string) {
    this.elements.firstNameInput().type(name);
  }

  fillLastName(lastName: string) {
    this.elements.lastNameInput().type(lastName);
  }

  fillBusinessEmail(email: string) {
    this.elements.businessEmailInput().type(email);
  }

  selectCountry(countryCode: string) {
    this.elements.countrySelect().select(countryCode);
  }

  fillPhoneNumber(phone: string) {
    this.elements.phoneInput().type(phone);
  }

  fillCompany(company: string) {
    this.elements.companyWebsiteInput().type(company);
  }

  fillRequest(info: string) {
    this.elements.requestInput().type(info);
  }

  fillAboutInfo(info: string) {
    this.elements.aboutInput().type(info);
  }

  selectProduct(option: string) {
    this.elements.productInterestSelect().select(option);
  }

  selectBudget(option: string) {
    this.elements.budgetSelect().select(option);
  }

  submitForm() {
    this.elements.submitButton().click();
  }
}

export default new ContactPage();
