import Pagina from './Pagina';

class Autorizacao extends Pagina {
	#elemento = {
		btn: {
			login: '[data-test="login-button"]',
		},
		ipt: {
			usuario: '[data-test="username"]',
			senha: '[data-test="password"]',
		},
		txt: {
			faltaDigitacao: '[data-test="error"]',
		},
	};

	acao = {
		efetuarLogin: (usuario, senha) => {
			this.acao.digitarUsuarioSenha(usuario, senha);
			this.acao.clicarBotaoLogin();
		},

		clicarBotaoLogin: () => {
			cy.get(this.#elemento.btn.login).click();
		},

		digitarUsuarioSenha: (usuario, senha) => {
			cy.get(this.#elemento.ipt.usuario).type(usuario);
			cy.get(this.#elemento.ipt.senha).type(senha);
		},
	};

	assersao = {
		erro: {
			informacaoDigitadaIncorretamente: () => {
				cy.get(this.#elemento.txt.faltaDigitacao).should(
					'contain',
					'Username and password do not match any user in this service'
				);
			},
			informacaoFaltando: () => {
				cy.get(this.#elemento.txt.faltaDigitacao).should('contain', 'Epic sadface');
			},
			nomeUsuarioFaltando: () => {
				cy.get(this.#elemento.txt.faltaDigitacao).should('contain', 'Username is required');
			},
			senhaFaltando: () => {
				cy.get(this.#elemento.txt.faltaDigitacao).should('contain', 'Password is required');
			},
		},

		sucesso: {
			urlMudou: () => {
				cy.url().should('equal', this.url.inventario);
			},
		},
	};
}

export default Autorizacao;
