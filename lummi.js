/**
 * Lummi [beta]
 *
 * O Lummi é um camarada que veio pra ajudar você
 * a realizar diversas tarefas, evitando que você
 * faça merda durante o desenvolvimento.
 *
 * Ele funciona quase igual ao Artisan, só que para
 * a nossa estrutura contida com vue.
 *
 * Para adicionar uma nova feature, consulte o desenvolvedor
 * principal (github@danielbonifacio) <danielbonifacio@outlook.com>
 * e evite dor de cabeça para você e para a sua equipe.
 *
 * ---
 * abaixo segue um código que visa ser performático
 * mas não deixando de lado o "manutenível".
 */

// Importa o Core do Lummi
require('./internal/Lummi');

/**
 * Importa a função e executa ela automaticamente
 * ***
 * *** NÃO aloca o require a uma variável.
 * ***
 *
 * @param {string} module Nome do módulo que precisa ser executado
 * @param  {...any} args Argumentos que serão passados para a função a ser executada
 */
const run = (module, ...args) =>
  require(`./internal/Lummi/${module}`)(...args);


/**
 * Comandos que o usuário enviou
 */
const commands = process.argv.slice(2);

commands.map((command) => {
  /**
   * Criar componentes
   * component:make
   */
  command.match(/component:make/gi)
    && run('CreateComponent', commands);

  /**
   * Criar views
   */
  command.match(/view:make/gi)
    && (function(){
      const commitLink = 'https://github.com/danielbonifacio/hparq#views';
      console.log('O comando de criar views não é mais suportado. \n' + commitLink)
    })();
});

console.log('\n');
