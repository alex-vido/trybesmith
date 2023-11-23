# TrybeSmith

Este projeto foi criado para gerenciar uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma API, utilizando Typescript e Sequelize.

Foi desenvolvida com as camadas de Model, Service e Controllers da aplicação, utilizando JWT para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação terá endpoints que darão suporte a operações de criação, leitura e atualização de informações.


## Instalação

Certifique-se de ter o Docker instalado na sua máquina antes de começar.

1. Clone este repositório:

https://github.com/alex-vido/trybesmith

2. Execute o Docker Compose para configurar o ambiente:

docker-compose up -d --build


3. Execute o comando Docker para ter acesso ao terminal interativo do container:

docker exec -it trybesmith bash.

4. Instale as dependências:

npm install


## Uso

Após a instalação e configuração, você pode iniciar o servidor local com o seguinte comando:

npm start


## Testes

Foram desenvolvidos testes para as principais funções da API. Você pode executar os testes com o seguinte comando:

npm test


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull request.
Licença

Este projeto está licenciado sob a MIT License.