/// <reference types="cypress" />

context('main form', () => {
    before(() => {
      cy.visit('https://form.jotform.com/210137027408345');
    })
  
    
   function browseToSteps(stepNumber){
    it('browse to step' + stepNumber, () => { //.contains
        cy.get('.jfProgress-itemLabel').contains( stepNumber)
        .invoke('show')
        .click();
      });
   }
   function nextBtn(){
   
    // jfWelcome-button jfInput-button  forNext-heading
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
   wait(3000);
   browseToSteps(1);

   wait(3000);
    function wait(timeToWait) {
        it('wait ' + timeToWait / 1000 + ' seconds', () => {
          cy.wait(timeToWait);
        })
      }
  
  
   
  })
  