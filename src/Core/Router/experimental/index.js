/* eslint-disable */
const fs = require('fs');
/**
 * Na moral, não tem motivo pra
 * você sequer olhar pra esse código
 * Quem dirá mexer. Sério.
 */
const map = require('./map.json');

const prepareComponent = (route) => {
  if (typeof route.component === 'string') {
    try {
      route.component = require('../../../Views/' + route.component).default
    } catch (err) {
      console.log(err.message.includes('ENOENT: no such file or directory'))
      throw new Error(err.message);
    }
  }
  return route;
}

const recursivePrepare = (route) => {
  Object.keys(route).map(key => {
    if (route[key] instanceof Array) {
      route[key].map(newRoute => {
        recursivePrepare(newRoute);
      })
    }
    prepareComponent(route);
  });
  return route;
}

const routes = [];

map.forEach(route => {
  routes.push(recursivePrepare(route));
});

export default routes;
