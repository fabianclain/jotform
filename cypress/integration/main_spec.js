/// <reference types="cypress" />

context('main form', () => {
    before(() => {
      cy.visit('https://form.jotform.com/210137027408345');
    })
  
    
   function browseToSteps(stepNumber){
    it('browse to step' + stepNumber, () => {
        cy.get('.jfProgress-itemPulse').get(2)
        .click();
      });
   }
   function nextBtn(){
    it('click next', () => {
        cy.get('.jfCard-actions button').contains('Next')
        .click();
      });
    // jfWelcome-button jfInput-button  forNext-heading
   }
   nextBtn();
   nextBtn();
  
   browseToSteps(1);
   browseToSteps(2);

   wait(3000);
    function wait(timeToWait) {
        it('wait ' + timeToWait / 1000 + ' seconds', () => {
          cy.wait(timeToWait);
        })
      }
  
  
   
  })
  