#                                           exercicios aula 08
Nesta atividade foi desenvolvida uma API utilizando JavaScript, Node.js e Express, com o objetivo de aprimorar o gerenciamento de pedidos, clientes, produtos e itens. Foram realizadas alterações nos controllers, rotas e arquivos JSON, além da implementação e testes das operações de CRUD. Também foram utilizados os métodos find e filter para relacionar as informações entre as diferentes partes do sistema.

                                            <<<  ITENS >>>

Para os itens, foi criado o arquivo itens.json dentro da pasta dados, contendo as informações dos itens dos pedidos. Foram desenvolvidas as rotas e controllers para realizar as operações de cadastrar, listar, alterar e excluir itens. Também foi criado o relacionamento entre itens e produtos utilizando o método find, permitindo buscar os dados do produto relacionado a cada item. Além disso, foi implementado o cálculo do subtotal de cada item, considerando a quantidade e o valor do produto. As funcionalidades foram testadas utilizando o Thunder Client.

                                               <<<GET>>>
<img width="906" height="1014" alt="Captura de tela 2026-10-06 153715" src="https://github.com/user-attachments/assets/12b2ebcf-500a-4a63-b358-678eeacbded2" />


                                               <<<POST>>>
<img width="940" height="1016" alt="Captura de tela 2026-10-06 153830" src="https://github.com/user-attachments/assets/a4233552-2cc7-41a0-a11e-f6131d8cf8f9" />

                                                <<<PUT>>>


<img width="954" height="1018" alt="Captura de tela 2026-10-06 153943" src="https://github.com/user-attachments/assets/69d4f35a-fa3e-4bed-be7a-ea6b70ee7a9e" />


                                               <<<DELETE>>>
<img width="944" height="1016" alt="Captura de tela 2026-10-06 153906" src="https://github.com/user-attachments/assets/6fa26e7a-247b-4f03-a7f1-2eba7b6788e7" />



                                                <<<PEDIDOS>>>

Para os pedidos, o arquivo pedidos.json foi atualizado conforme o enunciado, incluindo a identificação do cliente e a data de cada pedido. Também foram realizadas alterações no controller para relacionar os pedidos aos clientes e aos itens utilizando find e filter. A função de cálculo de subtotais que estava no controller de pedidos foi removida, pois essa responsabilidade passou para o controller de itens. Por fim, foi criada a função calcTotais, responsável por calcular o valor total de cada pedido, e as rotas foram testadas no Thunder Client para verificar o funcionamento da API.

                                                 <<<GET>>>

<img width="941" height="1017" alt="Captura de tela 2026-10-06 161338" src="https://github.com/user-attachments/assets/19262803-7d1d-4837-aeb5-fd9258e80462" />


                                               <<<POST>>>

   <img width="922" height="1007" alt="Captura de tela 2026-10-06 162208" src="https://github.com/user-attachments/assets/a3ebd5d9-1979-4152-b4ab-e94f5717477f" />

  

                                               <<<PUT>>>
<img width="945" height="1001" alt="Captura de tela 2026-10-06 161843" src="https://github.com/user-attachments/assets/a9836c43-8669-47cd-82c9-2c29e9534f31" />


                                             <<<DELETE>>>



<img width="943" height="1011" alt="Captura de tela 2026-10-06 162354" src="https://github.com/user-attachments/assets/e91b7ac4-ae1a-4624-9fd1-3be3ba9b4847" />




   




