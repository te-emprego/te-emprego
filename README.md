# Te Emprego

O **Te Emprego** é um projeto criado por [@danielbonifacio](https://github.com/danielbonifacio) que consiste em uma plataforma **100% gratuita** e funcional para a procura e divulgação de qualquer tipo de emprego/serviço.

## Knowledge necessário para contribuir

- ES6
- Vue
- Vuetify
- AirBnb Style Guide

Não pretende suportar IE (nenhuma versão).

## Estrutura

Este projeto foi construído em cima de uma estrutura privada do autor, chamada "hparq", caso você encontre alguma referência na documentação, se refere à estrutura e a interface de linha de comando (CLI).

## Rodando

``` shell
# clona o repositório
git clone https://github.com/danielbonifacio/te-emprego

# navega até a pasta
cd te-emprego

# instala as dependências
npm install

# inicia o dev server
npm run dev
```

Este projeto

## CLI

O hparq conta com uma CLI integrada (lummi.js na raiz do projeto) que vai te ajudar a realizar tarefas com mais eficiência e padronização.

### Components

Criar componentes com a Lummi é muito simples:
```
node lummi component:make nested/byNamespace/component
```

Esse comando irá criar este arquivo:
``` vue
<template>
  <div id="nested-bynamespace-component">
    Component
  </div>
</template>


<script>
export default {
  name: 'Component',
};
</script>


<style lang="scss">

</style>
```

em `src/Components/Nested/ByNamespace/Component.vue`.

Repare que é possivel aninhar componentes em diretórios (pense como namespaces), e o Lummi irá criá-los para você mesmo que não existam.

#### API

|flag||
|---|-|
|--no-sass| Remove o `lang='scss'` do template|

### Views

A estrutura de views mudou, por conta de uma necessidade de mudar de CommonJS para JSON o map das rotas.

Isso fez com que o comando de criação de views se tornasse mais verboso que o manual, visto que é muito mais simples manipular o JSON que responder à uma série de perguntas.

A manipulação pode ocorrer no `Core/Router/experimental/map.json`.

O namespace "experimental" irá ser suportado nas próximas versões do hparq, pois ainda não foram testados todos os casos de uso.

## Layouts

Layouts são *wrappers* de Views. É convencionado em frameworks como Laravel, que uma view extende um layout, mas, na metodologia de componentes, uma view é englobada por um layout.

```
+--------------+
| Layout       |
| +----------+ |
| |   View   | |
| +----------+ |
+--------------+
```

## Ícones

O hparq usa as CDNs do font-awesome e material design icons.

## Linting

O hparq usa, também, o linting do AirBnb (airbnb-base) e Vue (vue-essential) como padrão de linting de código, com algumas customizações:

```javascript
'linebreak-style': 'off',
'no-console': isProd ? 'error' : 'off',
'no-alert': isProd ? 'error' : 'off',
'no-unused-expressions': 'off',
'array-callback-return': 'off',
'no-nested-ternary': 'off',
'prefer-template': 'off',
'curly': 'off',
'max-len': 'off',
```

Você configura o Linting em `/.eslintrs.js` e `/.eslingignore`.

## Estrutura

A estrutura do hparq é auto explicativa

```
+ src
  + Components
  + Config
  + Core
  + Layouts
  + Views
```

O que pode te confundir, talvez, são os diretórios `Core` e `Config`.

Core é o cara que contem todos os métodos e controladores que são essenciais para o funcionamento da aplicação, como Controller de requisições HTTP, rotas, state (flux) e serviços (Token, helpers, etc.).

Config é quem armazena todas as configurações da aplicação.

Como se trata de uma arquitetura inteiramente front-end, você pode encontrar arquivos arquivo .scss nesses diretórios, e está tudo bem com isso. São configurações e helpers de CSS.


## Importando

Quando você precisar importar um componente, use namespaces que o hparq já definiu para você.

``` javascript
// importando um componente
import Component from 'Components/Testing/Components';

// importando uma view
import View from 'Views/View';

// importando um layoyt
import Layout from 'Layouts/Layout';

// importando uma configuração específica
import { Custom } from 'Config';
//ou
import Custom from 'Config/Custom';
```

Não importe extensões em arquivos `.vue` e `.js`

## Helpers

Dentro da instância do vue, você já tem acesso à alguns *helpers* através de `$helpers`.

``` vue
<tempalte>
  <Input
    v-model="inputs.telefone"
    :mask="$helpers.mask.mobile(telefone)"
    label="Telefone"
    tip="telefone ou celular"
    placeholder="Ex: (27) 99876-5432"
  />
</template>

<script>
export default {
  name: 'Custom Input',

  data: () => ({
    telefone: '',
  }),
};
</script>
```

No exemplo acima, o helper de mascara para telefone foi utilizado. Ele retorna uma máscara dinâmica pronta para o nono dígito de acordo com a quantidade de caracteres que o argumento passado tem.

Você pode criar novos e visualizar todos os helpers em `Core/Services/Helpers.js`.

*Caso tenha criado algum Helper que possa ser útil para o time, faça um Pull Request.*

