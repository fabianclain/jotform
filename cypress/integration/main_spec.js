/// <reference types="cypress" />

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
    function nextBtn() {

        // jfWelcome-button jfInput-button  forNext-heading
    }
    function wait(timeToWait) {
        it('wait ' + timeToWait / 1000 + ' seconds', () => {
            cy.wait(timeToWait);
        })
    }

    it('1click next', () => {
        cy.get('#jfCard-welcome-start').contains('Next')
            .click();
    });


    it('2click next', () => {
        cy.get('.jfCard-actions .jfInput-button.forNext.u-right').contains('Next')
            .click();
    });
    nextBtn();
    nextBtn();

    // browseToSteps(3);
    // it('draw something', () => {
    //     let signature =  cy.get('.jSignature')
    //     function draw(){
    //         for(let i=0; i<100;i++){
    //             signature.click(i, i)
    //         }
    //     }
    //     draw()
    // });
    browseToSteps(4);
    it('open calendar', () => {
        cy.get('.jfField-svgWrapper.forDate')
            .click();
    });
    it('click on today', () => {
        cy.get('.button.todayButton')
            .click();
        // .type({enter});
    });
    // it('clear today calendar', () => {
    //     cy.get('["type="text""]')
    //     .click();
    // });
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


    //    wait(3000);
    //    browseToSteps(1);

    wait(5000);



})
