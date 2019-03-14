const path = require('path');
const fs = require('fs');

/**
 * Renderiza o template
 * @param {string} templateName Nome do template que irá ser renderizado
 * @param {object} values Valores que irão substituir as mustache no template
 */
const render = (template, values) => {
  /**
   * Traz o template cru em string
   * @param {string} templateName nome do arquivo do template onde será feita a busca
   */
  const getTemplate = (templateName) => {
    const resolve = (...paths) => path.resolve(__dirname, ...paths);
    return fs.readFileSync(resolve('../Templates/', templateName), 'utf-8');
  };

  /**
   * Faz a troca das mustache pelos valores que ali cabem.
   * @param {string} model Modelo do template
   * @param {object} data Chaves para substituir no template
   */
  const replace = (model, data) => {
    let string = model;
    Object.keys(data).map((key) => {
      const reg = new RegExp(`{{ ${key} }}`, 'gm');
      string = string.replace(reg, data[key]);
    });

    return string;
  };

  const model = getTemplate(template);
  const renderedTemplate = (replace(model, values));

  return renderedTemplate;
};

module.exports = render;
