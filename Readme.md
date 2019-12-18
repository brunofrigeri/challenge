# Desafio: Favoritos do github

Este é um desafio para testar seus conhecimentos em javascript, React-Native e Graphql.

# Obrigatório

O projeto deve ser desenvolvido em React-Native e Graphql consumindo a [api do Github](https://developer.github.com/v4/).

A lista de repositórios da tela de Trending deve ser recuperada através do Graphql.

# Favoritos do github

Seu objetivo é replicar a tela de [Trending do github](https://github.com/trending) no aplicativo mobile.

O layout deve possuir duas tabs. Uma na qual serão listados os repositórios nos Trending do do Github e outra para listar os repositórios que foram favoritados pelo usuário enquanto ele estiver com o aplicativo aberto (Note que não são os repositórios favoritados por uma conta do github).

A tela de **Trending** deve:

- Listar repositórios
  - Ao entrar no aplicativo, deve exibir a lista de repositórios nos trending do github com o nome do repositório e quantidade de stars.
  - Ao clicar em um repositório da lista, deve exibir os detalhes do repositório individual: (Nome, quantidade de stars, quantidade de issues abertas, quantidade de forks, Lista de colaboradores, Url do repositório e descrição do repositório)
- Permitir favoritar
  - Os items da lista devem possuir um botão que permita o usuário adicionar este repositório a lista (local) de repositórios favoritos
- Permitir remover dos favoritos
  - Ao clicar novamente no botão de favoritar, o repositório deve ser excluído da lista de repositórios favoritos

A tela de **Favoritos** deve:

- Exibir a quantidade de repositórios favoritados pelo usuário.
- Lista os repositórios favoritados
  - Ao entrar na aba favoritos, deve exibir a lista de repositórios favoritados pelo usuário da mesma forma que é exibido na tela de Trending. Com a mesma ação de quando o item é clicado.
- Permitir remover dos favoritos
  - Ao clicar no botão de remover dos favoritos do item, o item deve ser instantaneamente dessa lista

# Diferenciais

- Utilizar Apollo-client
- Criar issues e resolvê-las a partir de pull requests
- Documentação no código e repositório
- Arquivos pequenos com poucas responsabilidades
- Estado da aplicação bem estruturado
- Usabilidade e feedback para o usuário no carregamento da consulta
- Seguir algum Javascript Style Guide
- Utilizar alguma ferramenta de CI
- Testes unitários

---

Este desafio foi inspirado em: [Jusbrasil:Challenge](https://github.com/jusbrasil/careers/blob/master/challenges/02-carrinho-de-compras.md)
