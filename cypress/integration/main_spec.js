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


    Utils.clickThatContains('click on the first next', css.start, 'Next')

    Utils.addName('first', css.firstName, faker.name.firstName());
    Utils.addName('last', css.lastName, faker.name.lastName());
    Utils.nextBtn();

    it('upload a file', () => {
        cy.get(css.input)
            .attachFile('AutomationHomework2021.pdf')
    });

    Utils.clickTo('uploaded file to be visible', css.fileUpload)

    Utils.nextBtn();

    it('draw something', () => {
        let signature = cy.get(css.signature)
        signature.should('be.visible');

        Utils.draw(signature)
    });

    Utils.nextBtn();

    Utils.clickTo('click and open calendar', css.forDate)

    Utils.clickTo('click on today Btn', css.todayButton)

    Utils.nextBtn();

    Utils.clickTo('Open Dropdown', css.dropdown)

    Utils.clickThatContains('select favorite pet', css.dropdownItem, 'Name of the first pet')

    Utils.addName('pet', css.secretValue, faker.name.findName());

    Utils.toBeVisible('have submit button', css.submitBtn)

    Utils.clickTo('submit button', css.submitBtn)

    Utils.toBeVisible('check thank you page', css.thankYouCss)

})
