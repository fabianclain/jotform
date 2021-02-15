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

    browseToSteps(3);
    it('draw something', () => {
        let signature =  cy.get('.jSignature')
        function draw(){
            for(let i=0; i<100;i++){
                signature.click(i, i)
            }
        }
        draw()
    });
    browseToSteps(4);

    //    wait(3000);
    //    browseToSteps(1);

    wait(5000);



})
