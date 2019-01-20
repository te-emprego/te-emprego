<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs8 id="content">
        <v-layout row wrap>
          <v-flex xs12 v-for="anuncio in anuncios" :key="anuncio.id">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 8 : 2} ${hover && 'primary theme--dark'}`"
                style="transition: .2s ease; cursor: pointer;"
                >
                <v-card-title>
                  <div style="width: 100%">
                    <div class="headline">{{ anuncio.titulo }}</div>
                    <div class="body-2 descricao my-2">{{ anuncio.descricao }}</div>
                    <div class="body-1 salario my-2">
                      <span v-if="typeof anuncio.salario === 'object'">
                        {{ `R$${anuncio.salario[0]}` }} — {{ `R$${anuncio.salario[1]}` }}
                      </span>
                      <span v-else>
                        {{ `R$${anuncio.salario}` }}
                      </span>
                    </div>
                    <div class="my-2" style="display: flex;algin-content:center;">
                      <span class="subhead">{{ anuncio.autor.nome }}</span>
                      <div class="mr-2">
                        <v-avatar size="24" class="elevation-3 ml-2">
                          <img :src="anuncio.autor.avatar">
                        </v-avatar>
                      </div>
                      <v-rating
                        :value="anuncio.autor.nota"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <v-spacer></v-spacer>
                      <v-btn outline :color="hover ? 'white' : 'primary'">
                        Detalhes
                      </v-btn>
                      <v-btn :color="hover ? 'white' : 'primary'">
                        Tenho Interesse
                        <v-icon right small>thumb_up</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4>
        <v-card class="pa-3" color="primary" dark>
          <v-layout row wrap>
            <v-flex md12>
              <div class="body-2">
                Área
              </div>
            </v-flex>
            <v-flex md12>
              <v-autocomplete
                solo
                clearble
                light
                style="height: 50px"
                v-model="formularioBusca.area"
                label="Área de atuação"
                :items="Object.keys(areas)"
                persistent-hint
              />
            </v-flex>
            <v-flex md12>
              <v-autocomplete
                solo
                clearble
                light
                style="height: 50px"
                v-model="formularioBusca.especializacao"
                label="Especialização"
                :readonly="!formularioBusca.area.length"
                :items="areas[formularioBusca.area]"
                persistent-hint
              />
            </v-flex>
            <v-flex md12>
              <div class="body-2">
                Salário
              </div>
            </v-flex>
            <v-flex md6>
              <v-text-field
                solo
                clearble
                light
                style="height: 50px"
                v-model.lazy="formularioBusca.salario.de"
                v-money="money"
                label="De"
              />
            </v-flex>
            <v-flex md6>
              <v-text-field
                solo
                clearble
                light
                style="height: 50px"
                v-model.lazy="formularioBusca.salario.ate"
                v-money="money"
                label="Até"
              />
            </v-flex>
            <v-flex md12>
              <v-layout>
                <v-spacer></v-spacer>
                <v-btn color="white" outline class="full-width">
                  Pesquisar
                  <v-icon right>search</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
        <Ads class="sticky mt-4"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Ads from 'Components/Ads';
import { VMoney } from 'v-money';

export default {
  directives: {
    money: VMoney,
  },
  components: {
    Ads,
  },
  data() {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
      },
      formularioBusca: {
        area: '',
        especializacao: '',
        salario: {
          de: '',
          ate: '',
        },
      },
      areas: {
        Todos: [''],
        'Desenvolvimento Web': [
          'Desenvolvimento Front End',
          'Desenvolvimento Back End',
          'Desenvolvimento FullStack',
          'Legados',
        ],
        'Desenvolvimento de Software': [
          'Desenvolvimento Front End',
          'Desenvolvimento Back End',
          'Desenvolvimento FullStack',
          'Legados',
        ],
        Infra: ['DevOps', 'Redes'],
        Design: ['Motion Graphics', 'Ilustração', 'Manipulação'],
        Marketing: [''],
      },
      anuncios: [
        {
          id: 1,
          titulo: 'Desenvolvedor Front End',
          descricao: 'Atuar como desenvolvedor front end. As responsabilidades do cargo incluem visitas e conferências diretas com o cliente.',
          salario: ['5.500,00', '6.700,00'],
          autor: {
            id: 1,
            nome: 'Nubank',
            avatar: 'https://www.nubank.com.br/images/nu-icon.png',
            nota: 4.5,
          },
        },
        {
          id: 2,
          titulo: 'Tester',
          descricao: 'Atuar como tester. Os desafios desse cargo são relacionados a análise e teste de features. É interessante que o candidato possua alguma experiência com o desenvolvimento de aplicativos, pois terá contato direto com a equipe de desenvolvimento',
          salario: ['3.500,00', '4.000,00'],
          autor: {
            id: 1,
            nome: 'Nubank',
            avatar: 'https://www.nubank.com.br/images/nu-icon.png',
            nota: 4.5,
          },
        },
        {
          id: 3,
          titulo: 'DevOps',
          descricao: 'A Wine precisa de um DevOps com 3 anos de experiência.',
          salario: '7.500,00',
          autor: {
            id: 1,
            nome: 'wine.com.br',
            avatar: 'https://pbs.twimg.com/profile_images/970746311086608384/sgT62YRy_400x400.jpg',
            nota: 5,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.fixed {

}

@keyframes from-top {
  from {
    top: -150px;
  }

  to {
    top: 80px;
  }
}

.elevation-8 {
  transform: translateY(-2px);
}

.salario,
.descricao {
  width: 100%;
}

.sticky {
  position: sticky;
  top: 100px;
}
</style>
