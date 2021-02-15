let nextBtn = function () {


    it('click next', () => {
        cy.get('.isVisible .jfCard-actions .jfInput-button.forNext.u-right')
            .click();
    });
};

module.exports = {
    start: '#jfCard-welcome-start',
    firstName: '[name="q3_name[first]"]',
    lastName: '[name="q3_name[last]"]',
    input: 'input[type=file]',
    nextBtn,
};
