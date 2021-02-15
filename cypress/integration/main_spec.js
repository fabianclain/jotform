/// <reference types="cypress" />
const faker = require("faker");
const css = require("./../constants/css");

context('main form', () => {
    before(() => {
        cy.visit('https://form.jotform.com/210137027408345');
    })

    function browseToSteps(stepNumber) {
        it('browse to step' + stepNumber, () => { //.contains
            cy.get('.jfProgress-itemLabel').contains(stepNumber)
                .invoke('show')
                .click();
        });
    }
    function wait(timeToWait) {
        it('wait ' + timeToWait / 1000 + ' seconds', () => {
            cy.wait(timeToWait);
        })
    }

    it('click next', () => {
        // cy.get('#jfCard-welcome-start').contains('Next')
        cy.get(css.start).contains('Next')
            .click();
    });
    it('add first name', () => {
        cy.get(css.firstName)
            .type(faker.name.firstName());
    });
    it('add last name', () => {
        cy.get(css.lastName)
            .type(faker.name.lastName(),);
    });
    css.nextBtn();
    // wait(100);
    it('upload a file', () => {
  
        cy.get(css.input)
        .attachFile('AutomationHomework2021.pdf')
   
    });
    it('check uploaded file', () => {
        cy.get('.qq-upload-file')
            .should('be.visible');
    });
    css.nextBtn();

    it('draw something', () => {
        let signature =  cy.get('.jSignature')
        function draw(){
            for(let i=0; i<100;i++){
                signature.click(i, i)
            }
        }
        draw()
    });
    css.nextBtn();

    it('open calendar', () => {
        cy.get('.jfField-svgWrapper.forDate')
            .click();
    });
    it('click on today', () => {
        cy.get('.button.todayButton')
            .click();
    });

    it('click next', () => {
        cy.get('.isVisible .jfCard-actions .jfInput-button.forNext.u-right')
            .click();
    });
    it('open dropdown', () => {
        cy.get('.jfDropdown-toggle')
            .click();
    });

    it('select favorite pet', () => {
        cy.get('.jfDropdown-optionListItem').contains('Name of the first pet')
            .click();
    });
    it('type input', () => {
        cy.get('.jfField.isValid input')
            .type('Louie');
    });

})
