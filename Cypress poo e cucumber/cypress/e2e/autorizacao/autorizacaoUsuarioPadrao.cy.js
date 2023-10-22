import Autorizacao from '../../pages/Autorizacao';

const autorizacao = new Autorizacao();

describe('Swag Labs', () => {
	before(() => autorizacao.visitar.home());

	context.skip('Acessar corretamente', () => {
		it('Acessar com sucesso', () => {
			autorizacao.acao.digitarUsuarioSenha('standard_user', 'secret_sauce');
			autorizacao.acao.clicarBotaoLogin();

			autorizacao.assersao.sucesso.urlMudou();
		});
	});

	context('Proteção contra erros', () => {
		it('Não conseguir acessar sem digitar os dados', () => {
			autorizacao.acao.clicarBotaoLogin();

			autorizacao.assersao.erro.informacaoFaltando();
		});

		it('Não conseguir acessar sem digitar o nome', () => {
			autorizacao.acao.digitarUsuarioSenha('{del}', 'secret_sauce');
			autorizacao.acao.clicarBotaoLogin();

			autorizacao.assersao.erro.nomeUsuarioFaltando();
		});

		it('Não conseguir acessar sem digitar a senha', () => {
			autorizacao.acao.digitarUsuarioSenha('standard_user', '{del}');
			autorizacao.acao.clicarBotaoLogin();

			autorizacao.assersao.erro.senhaFaltando();
		});

		it('Não conseguir acessar com informação incorreta', () => {
			autorizacao.acao.digitarUsuarioSenha('usuario_incorreto', 'senha_incorreta');
			autorizacao.acao.clicarBotaoLogin();

			autorizacao.assersao.erro.informacaoDigitadaIncorretamente();
		});
	});
});
