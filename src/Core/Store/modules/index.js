/**
 * Importa todos os módulos automaticamente
 * Não tem a menor razão para editar esse arquivo.
 */
const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default modules;
