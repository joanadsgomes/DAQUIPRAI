# DAQUI PRAÍ

Website da DAQUI PRAÍ, uma empresa fictícia de mudanças e transportes com sede em Coimbra.

Projeto da unidade curricular **Desenvolvimento para a Web**, da Licenciatura em Ciência de Dados para a Gestão (Coimbra Business School | ISCAC), ano letivo 2026/2027.

## Grupo

- Artur João Antunes de Paiva Ribeiro 2024140819
- Joana dos Santos Gomes 2024137612

## O projeto

A DAQUI PRAÍ é uma empresa fictícia de mudanças e transporte que trabalha de norte a sul do país, com especial atenção a Coimbra.

O website serve para apresentar a empresa, a sua identidade e os serviços que disponibiliza: mudanças residenciais, mudanças de escritório, mudanças de quartos de estudantes, pequenas mudanças e serviços complementares, como embalamento ou desmontagem e montagem de móveis. Os visitantes podem calcular de forma interativa uma estimativa do custo da sua mudança ou, se não souberem que serviço escolher, usar um sistema de recomendação que sugere a solução mais adequada.

## Estrutura do website

O menu principal tem cinco páginas e, nos ecrãs largos, um botão Pedir Orçamento destacado.

```
Menu: Início | Sobre nós | Serviços | Orçamento | Contactos   [Pedir Orçamento]

Início ............... apresentação da empresa, serviços, recomendação rápida, testemunhos
├── Sobre nós ......... história da empresa, equipa e valores
├── Serviços .......... tipos de mudanças e serviços complementares
├── Orçamento ......... dois percursos em separadores
│   ├── Orçamento personalizado ... origem e destino, tipo de serviço, veículo e extras
│   └── Recomendação .............. tamanho da mudança, data e serviços extra
└── Contactos ......... contactos, morada e formulário de contacto
```

## Funcionalidades

### Básicas

- Navegação entre as diferentes páginas do website
- Design responsivo para telemóvel, tablet e computador, com menu próprio para o telemóvel
- Apresentação da empresa, da sua identidade e dos serviços de mudanças disponibilizados
- Apresentação dos diferentes tipos de veículos disponíveis e dos serviços complementares
- Página de orçamentação com dois percursos distintos, disponibilizados através de separadores: orçamento personalizado e sistema de recomendação
- Formulário de orçamento com seleção de origem e destino, tipo e dimensão da mudança, veículo pretendido e serviços adicionais
- Cálculo automático do valor estimado do orçamento, com base nas características e opções selecionadas pelo utilizador
- Submissão e armazenamento dos pedidos de orçamento numa base de dados, através da integração com o Supabase
- Formulário de contacto

### Extras

- Sistema de recomendação do veículo mais adequado consoante as características da mudança
- Apresentação de uma estimativa de preço associada à recomendação efetuada
- Atualização dinâmica do resumo do orçamento à medida que o utilizador preenche o formulário
- Área de administração para consulta e gestão dos pedidos de orçamento submetidos, permitindo à empresa acompanhar o estado de cada pedido
- Animações e efeitos visuais

## Estado do projeto

Nesta entrega devem ser avaliadas as páginas **Início**, **Sobre nós** e **Serviços**. A página **Orçamento** está iniciada, mas ainda não está concluída.

### Implementado nesta entrega

- Páginas Início, Sobre nós e Serviços completas, com navegação entre elas
- Página Orçamento com a estrutura principal: imagem de abertura, os três passos do processo, os dois separadores e os formulários do orçamento e da recomendação (ainda sem cálculo)
- Layout responsivo para telemóvel, tablet e computador
- Menu do telemóvel que abre e fecha por cima da página
- Recomendação rápida na página inicial, com uma resposta para cada situação
- Testemunhos de clientes e vantagens da empresa em carrossel contínuo
- Separadores da página Orçamento que funcionam com o rato e com o teclado e que podem ser abertos diretamente a partir de outras páginas

### Planeado

Os extras listados acima, o cálculo do orçamento, a lógica da recomendação, o armazenamento dos pedidos no Supabase, a página Contactos e as restantes funcionalidades descritas em [Próximos passos](#próximos-passos) ainda não estão implementados.

## Esquemas

Os esquemas foram feitos no [draw.io](https://app.diagrams.net) e estão na pasta [`mockups/`](mockups/): a página inicial e a página Serviços, cada uma em telemóvel e em computador.

Para abrir os ficheiros: em app.diagrams.net, escolher Ficheiro › Abrir de › Dispositivo.

Durante o desenvolvimento, o aspeto das páginas Início, Serviços e Orçamento evoluiu em relação a estes primeiros esquemas: as cores, o logótipo e a estrutura geral mantêm-se, mas algumas secções foram reorganizadas e acrescentadas.

## Código

O site é feito em HTML, com o estilo escrito em Tailwind CSS e um design responsivo para telemóvel, tablet e computador. O menu do telemóvel, os separadores da página Orçamento e a recomendação rápida da página inicial usam JavaScript.

### Tecnologias

- **HTML5**: estrutura e conteúdo das páginas.
- **Tailwind CSS 3.4.17**: estilos e layout responsivo, carregado a partir do CDN oficial, tal como nos exemplos das aulas.
- **CSS3**: ícones (descarregados do [Iconify](https://icon-sets.iconify.design/) em formato CSS) e animação dos carrosséis.
- **JavaScript**: menu do telemóvel, separadores e recomendação rápida, sem bibliotecas externas.
- **Google Fonts**: tipo de letra Inter.
- **Backend e base de dados**: ainda não são usados nesta versão. Está prevista a integração com o Supabase.

### Requisitos

- Um navegador moderno.
- Ligação à internet, porque o Tailwind CSS e o tipo de letra são carregados a partir da internet. Sem ligação, as páginas abrem mas sem o estilo.
- A pasta completa do projeto.

Não é necessário instalar dependências, Node.js ou npm.

Para ver o site, abra o `index.html` no navegador, com duplo clique ou arrastando o ficheiro para uma janela do navegador. Durante o desenvolvimento usámos a extensão **Live Server** do Visual Studio Code, que abre o site em `http://127.0.0.1:5500` e atualiza a página sempre que um ficheiro é gravado.

```
DAQUIPRAI/
├── index.html          Início
├── sobre.html          Sobre nós
├── servicos.html       Serviços
├── orcamento.html      Orçamento
├── css/
│   ├── icones.css      ícones do site, organizados por página
│   └── animacoes.css   animação dos carrosséis
├── js/
│   ├── menu.js         menu do telemóvel
│   └── separadores.js  separadores Orçamento | Recomendação
├── imagens/            fotografias, logótipos e ícones
├── mockups/            esquemas feitos no draw.io
└── README.md
```

O cabeçalho e o rodapé são iguais em todas as páginas, mudando apenas a página assinalada como atual. Por agora estão repetidos em cada ficheiro HTML.

Os elementos interativos feitos com JavaScript:

- Menu do telemóvel: o botão Menu mostra e esconde a navegação, que abre por cima da página. Fecha com a tecla Escape, ao clicar fora do menu e quando a janela passa para ecrã largo (`js/menu.js`)
- Separadores da página Orçamento: ao escolher um separador, mostra o seu painel e esconde o outro. Funcionam com o rato e com as setas do teclado, e o endereço da página indica o separador aberto, por isso a ligação `orcamento.html#recomendacao` abre diretamente o separador da recomendação (`js/separadores.js`)
- Recomendação rápida da página inicial: ao escolher uma situação, mostra o serviço recomendado e uma ligação para pedir orçamento. Na opção "Outra situação", sugere o sistema de recomendação completo da página Orçamento (código no fim do `index.html`)

Os elementos interativos feitos só com HTML e CSS:

- Caixa da recomendação rápida que abre e fecha: elemento `<details>`
- Carrosséis contínuos das vantagens (página Serviços) e dos testemunhos (página inicial): animação CSS com a lista duplicada, para recomeçar sem saltos. Param quando se passa o rato por cima e ficam parados para quem tem a opção de reduzir o movimento ligada no sistema (`css/animacoes.css`)
- Cartões de escolha do tipo de serviço e do tamanho da mudança: botões de opção escondidos e o seletor `:checked` (classe `peer-checked:` do Tailwind)
- Corte na diagonal da imagem de abertura da página Serviços: propriedade `clip-path`

As ligações "Pedir Orçamento" dos cartões da página Serviços já indicam o tipo de mudança (por exemplo, `orcamento.html?tipo=residencial`), para mais tarde o formulário de orçamento abrir com essa opção escolhida.

Os testemunhos de clientes da página inicial são ilustrativos e foram criados para este projeto académico.

## Próximos passos

Numa fase seguinte, o projeto acrescenta mais JavaScript e uma base de dados ao site que já existe:

- **Cálculo do orçamento:** calcular o valor estimado a partir da distância entre a origem e o destino, do tipo de serviço, do veículo e dos serviços adicionais. A origem e o destino são escolhidos numa lista das capitais de distrito, para ser possível usar uma tabela de distâncias entre elas.
- **Sistema de recomendação:** a partir do tamanho da mudança, da data e dos serviços extra, recomendar o veículo, o número de caixas e o número de trabalhadores mais adequados, com uma estimativa do preço.
- **Resumo dinâmico:** atualizar o resumo do orçamento à medida que o utilizador preenche o formulário.
- **Pedidos de orçamento:** acrescentar ao formulário os dados de contacto (nome, email e telefone) e guardar os pedidos no Supabase.
- **Área de administração:** página com acesso reservado onde a empresa consulta os pedidos recebidos e acompanha o estado de cada um.
- **Página Contactos:** contactos, morada e formulário de contacto.
- **Formulário de orçamento com o serviço já escolhido:** ler o `?tipo=` das ligações da página Serviços e escolher automaticamente o tipo de mudança.

## Referências

| Website | O que se aproveitou |
|---|---|
| A Melhor Empresa de Mudanças em Portugal | Website de uma empresa de mudanças e transportes nacionais e internacionais, usado como referência para a organização dos serviços e do pedido de orçamento. |
