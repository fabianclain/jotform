const css = require("./../constants/css");


let nextBtn = function () {
    it('click next', () => {
        cy.get(css.nextBtn)
            .click();
    });
};
let addName = function (stepName, givenClass, fakerName) {
    it('add '+ stepName +' name', () => {
        cy.get(givenClass)
            .type(fakerName);
    });
};
let draw = function (cssItem) {
    for (let i = 0; i < 100; i++) {
        cssItem.click(i, i)
    }
};
module.exports = {
    draw,
    nextBtn,
    addName
};
