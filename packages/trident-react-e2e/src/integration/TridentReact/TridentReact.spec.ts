describe('trident-react: TridentReact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tridentreact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TridentReact!');
    });
});
