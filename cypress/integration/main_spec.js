/// <reference types="cypress" />
const faker = require("faker");
const css = require("./../constants/css");
const Utils = require("./../modules/Utils");

context('main form', () => {
    before(() => {
        cy.visit('https://form.jotform.com/210137027408345');
    })


    it('Title should be visible', () => {
        cy.get(css.title).contains('Test Form')
            .should('be.visible');
    });

    it('click next', () => {
        cy.get(css.start).contains('Next')
            .click();
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
        signature.should('be.visible');

        Utils.draw(signature)
    });
    Utils.nextBtn();

    it('open calendar', () => {
        cy.get(css.forDate)
            .should('be.visible')
            .click();
    });
    it('click on today', () => {
        cy.get(css.todayButton)
            .should('be.visible')
            .click();
    });
    Utils.nextBtn();

    it('open dropdown', () => {
        cy.get(css.dropdown)
            .should('be.visible')
            .click();
    });

    it('select favorite pet', () => {
        cy.get(css.dropdownItem).contains('Name of the first pet')
            .should('be.visible')
            .click();
    });
    Utils.addName('pet', css.secretValue, faker.name.findName());
    it('should submit button', () => {
        cy.get(css.submitBtn)
            .should('be.visible')
            .click();
    });

})
