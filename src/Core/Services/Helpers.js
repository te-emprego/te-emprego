/**
 * Helpers para agilizar o desenvolvimento
 * das telas pela equipe.
 *
 * Desenvolvidos por Daniel Bonifacio.
 *
 * Estão devidamente documentados, mas, como sempre:
 * na dúvida, PERGUNTE. Evite estresse.
 *
 * email: danielbonifacio@outlook.com
 * whats: 27 99900-1143
 * github: @danielbonifacio
 */
const Helpers = {
  /**
   * Máscaras mais comuns
   */
  mask: {
    /**
     * Máscara dinâmica de telefone e celular
     * @param {string} value Propriedade onde será comparada a length
     * @param {boolean} isRaw Caso o valor da propriedade venha como raw
     */
    mobile(value, isRaw) {
      return value
        ? value.length > (isRaw ? 10 : 14)
          ? '(##) #####-####'
          : '(##) ####-#####'
        : '';
    },
  },
  /**
   * Regex mais comuns
   */
  regex: {
    email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/gi,
  },

  /**
   * Gerar conteúdo
   */
  generate: {
    /**
     * Gera uma string aleatória de aluguns caracteres
     * pode ser usada como ID único de elementos
     */
    randomId() {
      return Math.random().toString(36).substring(2);
    },
  },
};

export default Helpers;
