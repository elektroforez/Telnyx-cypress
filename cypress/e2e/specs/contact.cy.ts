import contactPage from "../pages/contact.page";
import { faker } from "@faker-js/faker";

var inputData = {
  select: "Support",
  selectSales: "Sales Inquiry",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  invalidEmail: faker.lorem.word(),
  website: faker.internet.url(),
  product: "Other",
  budget: 1,
  request: faker.lorem.sentence(),
  about: faker.lorem.sentence(),
};

beforeEach(() => {
  contactPage.visit();
});

context("Contact us form", () => {
  it("Submit form with empty fields", () => {
    contactPage.submitForm();
    contactPage.elements.helpSelect().should("have.class", "mktoInvalid");
    contactPage.elements
      .helpErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without first name", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.submitForm();
    contactPage.elements.firstNameInput().should("have.class", "mktoInvalid");
    contactPage.elements
      .nameErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without last name", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.submitForm();
    contactPage.elements.lastNameInput().should("have.class", "mktoInvalid");
    contactPage.elements
      .lastNameErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without email", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.submitForm();
    contactPage.elements
      .businessEmailInput()
      .should("have.class", "mktoInvalid");
    contactPage.elements
      .emailErrorMsg()
      .should("be.visible")
      .should("contain.text", "Must be valid email.")
      .should("contain.text", "example@yourdomain.com");
  });
  it("Submit form with invalid email", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.invalidEmail);
    contactPage.submitForm();
    contactPage.elements
      .businessEmailInput()
      .should("have.class", "mktoInvalid");
    contactPage.elements
      .emailErrorMsg()
      .should("be.visible")
      .should("contain.text", "Must be valid email.")
      .should("contain.text", "example@yourdomain.com");
  });
  it("Submit form without company website", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.email);
    contactPage.submitForm();
    contactPage.elements
      .companyWebsiteInput()
      .should("have.class", "mktoInvalid");
    contactPage.elements
      .websiteErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without request description", () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.email);
    contactPage.fillCompany(inputData.website);
    contactPage.submitForm();
    contactPage.elements.requestInput().should("have.class", "mktoInvalid");
    contactPage.elements
      .requestErrorMsg()
      .should("have.text", "This field is required.");
  });
  it('Submit form without "How did you hear about Telnyx"', () => {
    contactPage.selectHelpOption(inputData.select);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.email);
    contactPage.fillCompany(inputData.website);
    contactPage.fillRequest(inputData.about);
    contactPage.submitForm();
    contactPage.elements.aboutInput().should("have.class", "mktoInvalid");
    contactPage.elements
      .aboutErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without Primary product interest", () => {
    contactPage.selectHelpOption(inputData.selectSales);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.email);
    contactPage.fillCompany(inputData.website);
    contactPage.submitForm();
    contactPage.elements
      .productInterestSelect()
      .should("have.class", "mktoInvalid");
    contactPage.elements
      .productErrorMsg()
      .should("have.text", "This field is required.");
  });
  it("Submit form without budget", () => {
    contactPage.selectHelpOption(inputData.selectSales);
    contactPage.fillFirstName(inputData.name);
    contactPage.fillLastName(inputData.lastName);
    contactPage.fillBusinessEmail(inputData.email);
    contactPage.fillCompany(inputData.website);
    contactPage.selectProduct(inputData.product);
    contactPage.submitForm();
    contactPage.elements.budgetSelect().should("have.class", "mktoInvalid");
    contactPage.elements
      .budgetErrorMsg()
      .should("have.text", "This field is required.");
  });
});
