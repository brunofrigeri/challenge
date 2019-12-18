# Desafio: Favoritos do github

Este é um desafio para testar seus conhecimentos em javascript, React-Native e Graphql.

# Como usar

- Basta que seja utilizado o comando `react-native run-ios` ou `react-native run-android`.
- É necessário que seja criada um `dotenv` file com a seguinte linha `PRIVATE_KEY=MINHA_PRIVATE_KEY`
  - Para saber como gerar uma private key acesse https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - Escopos a serem marcados na criação da key:
    - user
    - public_repo
    - repo
    - repo_deployment
    - repo:status
    - read:repo_hook
    - read:org
    - read:public_key
    - read:gpg_key

# Aplicação

- A aplicação consiste em um React Native CLI project
- Totalmente desevolvida seguindo um padrão de issues e pull requests, em que as issues descrevem o problema e as pull requests o resolver e descrevem como foi resolvido
- Código comentado para melhor entendimento

# Passo a passo de desenvolvimento

- Configurações básicas de ambiente
- Configuração do arquivo de rotas, introduzindo uma BottomTabNavigator para mudança de telas
- Configurações do apollo-client
- Confecção e uso da query via GraphQL a partir da API do GitHub
- Criação de componentes responsáveis pela listagem dos repositórios (todos os componentes foram utilizados nas duas Tabs utilizadas: Home e Favoritos)
- Integração com o Redux para ambas as páginas, facilitando as mudanças locais
