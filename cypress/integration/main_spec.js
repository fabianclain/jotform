/// <reference types="cypress" />
const faker = require("faker");
const css = require("./../constants/css");
const Utils = require("./../modules/Utils");

context('main form', () => {
    before(() => {
        cy.visit('https://form.jotform.com/210137027408345');
    })

    it('click next', () => {
        cy.get(css.start).contains('Next')
            .click();
    });
    it('add first name', () => {
        cy.get(css.firstName)
            .type(faker.name.firstName());
    });

    Utils.addName('first', css.firstName, faker.name.firstName());
    Utils.addName('last', css.lastName, faker.name.lastName());
    Utils.nextBtn();
    
    it('upload a file', () => {
        cy.get(css.input)
            .attachFile('AutomationHomework2021.pdf')
    });
    it('check uploaded file', () => {
        cy.get(css.fileUpload)
            .should('be.visible');
    });

    Utils.nextBtn();

    it('draw something', () => {
        let signature = cy.get(css.signature)
        Utils.draw(signature)
    });
    Utils.nextBtn();

    it('open calendar', () => {
        cy.get(css.forDate)
            .click();
    });
    it('click on today', () => {
        cy.get(css.todayButton)
            .click();
    });
    Utils.nextBtn();

    it('open dropdown', () => {
        cy.get(css.dropdown)
            .click();
    });

    it('select favorite pet', () => {
        cy.get(css.dropdownItem).contains('Name of the first pet')
            .click();
    });

    Utils.addName('pet', css.secretValue, faker.name.findName());


})
