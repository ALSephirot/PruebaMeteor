import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './mapaTiendas.html'
import { Tiendas } from '../../../api/tiendas';
import {name as mapa} from '../mapa/mapa';

class MapaTiendas{
    constructor($scope, $reactive){
        'ngInject';
        
        $reactive(this).attach($scope);
        
        this.helpers({
            tiendas(){
                return Tiendas.find(); 
            }
        });
    }
}

const name = 'mapaTiendas';

export default angular.module(name,[angularMeteor, mapa])
.component(name,{
   templateUrl:`imports/ui/components/${name}/${name}.html`,
   controllerAs: name,
   controller: MapaTiendas 
})
.config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('mapa', {
      url: '/mapa',
      template: '<mapa-tiendas></mapa-tiendas>'
    });
}