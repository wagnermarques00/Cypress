describe('Todo Application tests', () => {
	it('Visit the Todo application', () => {
		cy.visit('http://todomvc.com/examples/react/#/');
	});

	it('Contains todo input element', () => {
		cy.visit('http://todomvc.com/examples/react/#/').get('.new-todo');
	});

	it('Adds a new todo', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').type('New Todo {Enter}');
	});

	it('Asserts change in application state', () => {
		cy.visit('http://todomvc.com/examples/react/#/').get('.new-todo').type('New Todo{Enter}');

		cy.get('.new-todo').type('Another Todo{Enter}').get('.todo-list').find('li').should('have.length', 2);
	});

	it('Asserts inserted todo items are present', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').type('New Todo{Enter}');
		cy.get('.new-todo').type('Another Todo{Enter}');
		cy.get('.todo-list').find('li').should('have.length', 2);
		cy.get('li:nth-child(1)>div>label').should('have.text', 'New Todo');
		cy.get('li:nth-child(2)>div>label').should('have.text', 'Another Todo');
	});
});

describe('Cypress Assertions', () => {
	it('Using implicit subjects - should', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?');
	});

	it('Using implicit subjects - and', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?').and('have.class', 'new-todo');
	});

	it('Can assert explicit subjects', () => {
		const eqString = 'foo';
		expect(eqString).to.equal('foo');
		expect(eqString).to.have.lengthOf(3);
		expect(eqString).to.be.a('string');
	});

	it('Using should with explicit subjects', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').should(($elem) => {
			expect($elem).to.have.class('new-todo');
		});
	});
});

describe('Exercising: implicit and explicit subjects', () => {
	it('Implicit assertion if the todo has been added', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').type('New Todo{Enter}');
		cy.get('.todo-list').find('li').should('have.text', 'New Todo');
	});

	it('Explicit assertion whether a marked Todo was "complete"', () => {
		cy.visit('http://todomvc.com/examples/react/#/');

		cy.get('.new-todo').type('New Todo{Enter}');
		cy.get('.toggle').click();

		cy.get('.todo-list > li')
			.invoke('attr', 'class')
			.then((className) => {
				expect(className).to.include('completed');
			});
	});
});
