import angular from 'angular'
import angularMeteor from 'angular-meteor'

import { Meteor } from 'meteor/meteor';

import { name as Tiendas } from '../imports/ui/components/tiendas/tiendas';

//Configuro bootstrap
function onReady() {
  angular.bootstrap(document, [
    Tiendas
  ], {
    strictDi: true
  });
}

//Configuro la app por si es una app movil
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
