# Biblioteca de Jogos

A "Biblioteca de Jogos" é um aplicativo desenvolvido usando a biblioteca React, que permite aos usuários gerenciar uma coleção de jogos. O objetivo principal dessa aplicação é fornecer uma interface simples e intuitiva para que os usuários possam adicionar, visualizar e remover jogos da sua biblioteca pessoal.

## Funcionalidades

1. **Adição de Novos Jogos:** Os usuários podem adicionar novos jogos à sua biblioteca fornecendo informações como título do jogo e URL da capa. Ao inserir esses detalhes em um formulário, o jogo é adicionado à lista de jogos na biblioteca.

2. **Visualização de Jogos:** A lista de jogos adicionados é exibida na tela inicial da aplicação. Cada jogo é representado por seu título e uma imagem da capa, que permite aos usuários identificar rapidamente os jogos em sua coleção.

3. **Remoção de Jogos:** Caso o usuário deseje remover um jogo da sua biblioteca, ele pode clicar no botão "Remover" associado ao jogo específico. Isso acionará a remoção do jogo da lista e, consequentemente, ele deixará de ser exibido na biblioteca.

4. **Armazenamento Local:** A aplicação utiliza o armazenamento local do navegador (localStorage) para salvar e recuperar a lista de jogos. Dessa forma, mesmo que o usuário feche o navegador ou atualize a página, a coleção de jogos permanecerá salva.

## Componentes da Aplicação

A aplicação é composta por diversos componentes, cada um com uma função específica:

1. **`App`:** O componente principal que renderiza a página inicial da biblioteca de jogos e gerencia toda a lógica relacionada à adição e remoção de jogos.

2. **`useGameCollection`:** Um hook personalizado que gerencia o estado da coleção de jogos, fornecendo funções para adicionar e remover jogos, além de recuperar a lista de jogos do armazenamento local.

3. **`NewGameForm`:** Um componente que renderiza um formulário para adicionar novos jogos à biblioteca. Ele utiliza o componente `TextInput` para capturar os detalhes do jogo, como título e URL da capa.

4. **`Game`:** Um componente que representa cada jogo individual na biblioteca. Ele exibe o título e a imagem da capa do jogo, bem como o botão "Remover" para permitir a exclusão do jogo da coleção.

Esses componentes trabalham em conjunto para fornecer uma experiência de gerenciamento de jogos eficiente e interativa aos usuários da "Biblioteca de Jogos".
