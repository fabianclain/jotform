const css = require("./../constants/css");

let nextBtn = function () {
    it('click next', () => {
        cy.get(css.nextBtn)
        .should('be.visible')
            .click();
    });
};
let addName = function (stepName, givenClass, fakerName) {
    it('add '+ stepName +' name', () => {
        cy.get(givenClass)
        .should('be.visible')
            .type(fakerName);
    });
};
let draw = function (cssItem) {
    //I left this here so you can actually see the line drawing.I left only one dot, for speed purposes.  

    // for (let i = 0; i < 100; i++) {
    //     cssItem.click(i, i)
    // }

    cssItem
    .should('be.visible')
    .click(0, 0)
};
let browseToSteps = function (stepNumber) {
    it('browse to step' + stepNumber, () => { 
        cy.get(css.step).contains(stepNumber)
            .invoke('show')
            .click();
    });
};
let wait = function (timeToWait) {
    //explicitely saying number of second for better reading.
    it('wait ' + timeToWait / 1000 + ' seconds', () => {
        cy.wait(timeToWait);
    })
};
module.exports = {
    wait,
    browseToSteps,
    draw,
    nextBtn,
    addName
};
