describe('Go to the website', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
})
describe('button disabled?', () => {
    it('is it disabled now?', () => {
        cy.get('button')
        .should('be.disabled')
    })
})
describe('are fields typeable?', () => {
    it('is name typeable?', () => {
        cy.get('input[name="name"]')
        .type('namebro')
        .should('have.value', 'namebro')
    })
    it('email typable?', () => {
        cy.get('input[name="email"]')
        .type('test@test.test')
        .should('have.value', 'test@test.test')
    })
    it('password typable?', () => {
        cy.get('input[name="password"]')
        .type('password')
        .should('have.value', 'password')
    })
})
// checkbox check test
describe('checkbox checked?', () => {
    it(' checkbox  checked?', () => {
        cy.get('input[name="terms"]')
        .not("[disabled]")
        .check()
        .should('be.checked')
    })
})
describe('anything filled', () => {
    it('anything filled', () => {
        cy.get('input[name="name"]').should('not.have.value')
        cy.get('input[name="email"]').should('not.have.value')
        cy.get('input[name="password"]').should('not.have.value')
        cy.get('input[name="terms"]').should('be.checked')
    })
})
describe('submit form funcitonal', () => {
    it('form submit?', () => {
        cy.get('button')
        .should('not.be.disabled')
    })
})