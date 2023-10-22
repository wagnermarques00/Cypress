# language: pt
Feature: Autenticação no Swag Labs
  Rule: O usuário só pode acessar a página após digitar todas as informações corretamente

    Scenario: Proteção contra erros

      Given o usuário está na página inicial
      When o usuário tenta fazer login sem inserir suas credenciais
      Then uma mensagem de erro informando informações em falta é exibida

      Given o usuário está na página inicial
      When o usuário tenta fazer login sem inserir seu nome de usuário
      And clica no botão de login
      Then uma mensagem de erro informando nome de usuário em falta é exibida

      Given o usuário está na página inicial
      When o usuário tenta fazer login sem inserir sua senha
      And clica no botão de login
      Then uma mensagem de erro informando senha em falta é exibida

      Given o usuário está na página inicial
      When o usuário insere informações de login incorretas
      And clica no botão de login
      Then uma mensagem de erro informando informações incorretas é exibida

    Scenario: Acesso bem-sucedido

      Given o usuário está na página inicial
      When o usuário insere suas credenciais de login
      And clica no botão de login
      Then a página é redirecionada com sucesso
