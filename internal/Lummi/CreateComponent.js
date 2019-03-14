const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const render = require('../TemplateRender');
const _ = require('lodash');

const Components = {
  /**
   * Renderiza o template do componente
   *
   * @param {string} componentName Nome do componente com Namespace
   * @param {array} flags flags de alteração de comportamento
   * @returns {string} template
   */
  getComponentString(componentName, flags) {
    let useSass = true;
    let name = componentName;

    if (name === undefined) {
      return chalk.red('Você precisa especificar um nome para este componente');
    }

    name = this.getComponentName(name);

    if (flags.includes('--no-sass') || flags.includes('-ns')) {
      useSass = false;
    }

    const template =
      `${render('Template', { componentName: componentName.replace(/\//g, '-') })}\n\n${render('Script', { componentName: name })}\n\n${render('Style', { lang: useSass ? 'scss' : 'css' })}`;

    return template;
  },

  /**
   * Recupera o nome do componente que será renderizado
   */
  getComponentName: dir => _.upperFirst(String(dir.match(/\w+$/g))),

  /**
   * Recupera o caminho onde o componente será gravado
   */
  getComponentPath: (dir) => {
    const dirOnly = dir.replace(/\w+$/g, '');
    const ufs = dirOnly.split('/').map(singleDir => _.upperFirst(singleDir));
    return ufs.join('/');
  },

  /**
   * Renderiza e grava o componente
   *
   * @param {string} componentName Nome com ou sem namespace do componente
   * @param {array} flags flags de alteração de comportamento
   * @returns {object} retorna um objeto do tipo status
   */
  make(componentName, flags) {
    const component = this
      .getComponentString(componentName, flags);

    const dir = path.resolve(
      __dirname,
      '../../src/Components/',
      this.getComponentPath(componentName),
    );

    const fileNameAndDirectory = `${dir}/${this.getComponentName(componentName)}.vue`;
    const fileExists = fs.existsSync(fileNameAndDirectory);

    if (fileExists) return {
      type: 'Error',
      message: 'Este componente já existe. Não posso sobecrevê-lo.',
    };

    try {
      fs.ensureDirSync(dir);
      fs.writeFile(fileNameAndDirectory, component);

      return {
        type: 'Success',
        message: 'Componente criado com sucesso!',
      };
    } catch (err) {
      console.log('erro ao criar component!');
      throw err;
    }
  },
};

module.exports = (args) => {
  const action = args[0].split(':')[1];

  const log = Components[action](args[1], args);

  console.log(
    log.type === 'Success'
      ? chalk.green(log.message)
      : chalk.red(log.message),
  );
};
