<template>
  <v-layout row wrap>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-text-field
        label="Processo"
        v-model="pesquisaProcesso"
        prepend-icon="file_copy"
        hint="Número do processo"
      />
    </v-flex>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-autocomplete
        label="Ano"
        hint="Ano de início"
        :items="states"
        prepend-icon="calendar_today"
      ></v-autocomplete>
    </v-flex>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-select
        label="Área"
        hint="Área do processo"
        :items="areas"
        prepend-icon="view_carousel"
      ></v-select>
    </v-flex>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-text-field
        label="ID"
        hint="Identificador do processo"
        prepend-icon="vpn_key"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-autocomplete
        label="Tipo"
        hint="Tipo do processo"
        :items="tipos"
        prepend-icon="class"
      ></v-autocomplete>
    </v-flex>
    <v-flex xs12 md6 lg3 class="px-2">
      <v-autocomplete
        label="Comissão"
        hint="Comissão responsável"
        :items="comissoes"
        prepend-icon="class"
      ></v-autocomplete>
    </v-flex>
    <v-flex xs12 md6 class="px-2">
      <v-layout row wrap>
        <v-flex xs12 md5 class="pr-2">
          <v-text-field
            label="Assunto"
            hint="Resumo do processo"
            prepend-icon="class"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md2 class="pr-2">
          <v-select
            :items="['e', 'ou', 'exceto']"
          ></v-select>
        </v-flex>
        <v-flex xs12 md5 class="pr-2">
          <v-text-field></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
const years = () => {
  const a = [];
  for (let i = 2018; i > 1970; i -= 1) {
    a.push(i);
  }
  return a;
};

export default {
  computed: {
    pesquisaProcesso: {
      get() {
        return this.$store.getters['Processos/Tramitacao/Pesquisa'];
      },

      set(value) {
        this.$store.commit('Processos/Tramitacao/Pesquisa', value);
      },
    },
  },
  data: () => ({
    states: years(),
    areas: ['Viagem', 'Recursos Humanos', 'Legislativo', 'Administrativo'],
    tipos: [
      'Abono',
      'Afastamento',
      'ALVARÁ DE CONSERVAÇÃO (HABITE-SE)',
      'ALVARÁ DE EVENTOS ESPORTIVOS',
      'Aposentadoria',
      'Ata de Sessão',
      'Audiência Pública',
      'Audiência Pública_copia',
      'Autorização de Viagem',
      'AUTORIZAÇÃO PARA RELIGAÇÃO DE ENERGIA ELÉTRICA',
      'Aviso de Convênio',
      'Cancelamento de Viagem',
      'Central de Penas e Medidas',
      'CERTIDÃO DE CANCELAMENTO DE PROJETO',
      'Comissão Especial de Estudo',
      'Comissão Interna de Prevenção de Acidentes - CIPA',
      'Comissão Parlamentar de Inquérito',
      'Compensação de Horas Extras',
      'Contas do Prefeito',
      'Contrato',
      'Convocação de Suplente',
      'DENÚNCIA REFERENTE A IRREGULARIDADES EM OBRAS',
      'Determinação de Viagem',
      'Documentos Diversos',
      'Efetivo Exercício',
      'Emenda',
      'Exoneração',
      'Exoneração Gabinete',
      'Exoneração Mesa',
      'Falta Injustificada',
      'Faltas Injustificadas',
      'Faltas Justificadas',
      'Férias',
      'Folha de Pagamento do IPMT',
      'Impugnação ao Edital',
      'Indicação',
      'Indicação - Serra',
      'Indicação Caçapava',
      'Inexigibilidade/Dispensa com Justificativa',
      'Itinerário de Ônibus',
      'Justificativa de Falta',
      'Legislação Participativa',
      'Liberação de Recurso',
      'Licença',
      'Licença - Acidente em Serviço',
      'Licença - Acompanhamento de Familiar',
      'Licença - Atividade Política',
      'Licença - Desempenho de Mandato Classista',
      'Licença - Gestante/Adotante/Paternidade',
      'Licença - Interesse Particular',
      'Licença - Serviço Militar',
      'Licença - Tratamento de Saúde',
      'Licença Prêmio',
      'Licença-Prêmio',
      'Memorando Jurídico',
      'Mensagem de Retirada',
      'Moção',
      'Multa',
      'Nome Parlamentar',
      'Nomeação - Antigos para consulta',
      'Nomeação Gabinete',
      'Nomeação/Designação/Revogação Mesa Diretora',
      'Ordem de Pagamento',
      'Pedido de Aposentadoria',
      'Pedido de Compras',
      'Pedido de Pagamento SND',
      'Processo Judicial',
      'Progressão por Qualificação e Mérito',
      'Projeto de Decreto Legislativo',
      'Projeto de Lei Complementar',
      'Projeto de Lei Ordinária',
      'Projeto de Resolução',
      'Proposta de Emenda à Lei Orgânica do Município',
      'Registro de Horas Extras',
      'Registro de Horas Extras',
      'Relatório Resumido de Execução Orçamentária',
      'Req. Div. RH - 13º em parcela única',
      'Req. Div. RH - Abono permanência',
      'Req. Div. RH - Alteração de jornada de trabalho',
      'Req. Div. RH - Apostilamento',
      'Req. Div. RH - Averbação de Tempo de Serviço',
      'Req. Div. RH - Canc. de Plano Odontológico/Saúde',
      'Req. Div. RH - Documentação/Certidão',
      'Req. Div. RH - Exclusão de Bolsa Pontualidade',
      'Req. Div. RH - Horário Especial',
      'Req. Div. RH - Juntada de Documentos',
      'Req. Div. RH - Parcelamento de Débitos',
      'Req. Div. RH - Red. Jornada de Trabalho Estagiário',
      'Req. Div. RH - Renúncia de Comissão',
      'Requerimento',
      'Requerimentos Diversos ao RH',
      'Resposta de Indicação',
      'Retirada de Proposição',
      'Sessão Solene/Solenidade',
      'SJC - AVALIAÇÃO DE DESEMPENHO',
      'SJC - CONTRATO',
      'SJC - DISPENSA DE LICITAÇÃO',
      'SJC - PROCESSO LICITATÓRIO - PREGÃO',
      'SJC - REQUISIÇÃO',
      'SJC - SOLICITAÇÃO DE ESTÁGIO',
      'Solicitação de Atos',
      'Solicitação de Compra',
      'Solicitações/Requerimentos Diversos',
      'Subemendas',
      'Substitutivo',
      'Substitutivos',
      'Tribuna Livre',
      'Tribunal de Contas do Estado de São Paulo',
      'Utilização de Espaço',
      'Viagem',
      '__CHAMADO TÉCNICO',
    ],
    comissoes: [
      'Comissão de Acessibilidade',
      'Comissão de Defesa e Proteção dos Animais',
      'Comissão de Direitos Humanos',
      'Comissão de Educação, Cultura e Turismo',
      'Comissão de Esporte e Lazer',
      'Comissão de Ética',
      'Comissão de Finanças e Orçamento',
      'Comissão de Justiça e Redação',
      'Comissão de Legislação Participativa',
      'Comissão de Obras, Serv. Pub., Des. Urb. e Meio Ambiente',
      'Comissão de Saúde, Trab., Seg. Social e Serv. Público',
      'Comissão Especial de Fiscalização Financeira e Orçamentária',
    ],
  }),
};
</script>
