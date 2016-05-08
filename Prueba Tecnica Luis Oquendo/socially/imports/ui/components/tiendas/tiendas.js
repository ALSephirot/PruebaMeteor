import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './tiendas.html';
import {name as MapaTiendas} from '../mapaTiendas/mapaTiendas';
import {name as PartiesList} from '../partiesList/partiesList';
import {name as PartyDetails} from '../partyDetails/partyDetails';
import {name as Navigation} from '../navigation/navigation'

class Socially {}

const name = "tiendas";

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  MapaTiendas,
  PartiesList,
  PartyDetails,
  Navigation,
  'accounts.ui'
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Socially
})
.config(config)
.run(run);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/mapa');
}

function run($rootScope, $state) {
  'ngInject';
 
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        alert('Debes de estar logeado!');
        $state.go('parties');
      }
    }
  );
}

