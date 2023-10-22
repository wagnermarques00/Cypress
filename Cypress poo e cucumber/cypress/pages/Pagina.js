class Pagina {
	#baseUrl = Cypress.env('base_url');

	url = {
		home: this.#baseUrl,
		inventario: `${this.#baseUrl}/inventory.html`,
	};

	visitar = {
		home: () => {
			cy.visit(this.url.home);
		},
		inventario: () => {
			cy.visit(this.url.inventario);
		},
	};
}

export default Pagina;
