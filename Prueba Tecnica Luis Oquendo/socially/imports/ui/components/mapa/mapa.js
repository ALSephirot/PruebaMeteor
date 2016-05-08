import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import './mapa.html';

class MapaTiendas{
  constructor($scope, $reactive) {
    'ngInject';
 
    this.map = {
      center: {
        latitude: 6.265250,
        longitude: -75.572690
      },
      zoom: 8,
      events: {}
    };
        
    var ATiendas = this.tiendas;
    console.log("tiendas: ",ATiendas);
    this.Markers = [];
    
    angular.forEach(ATiendas, function(value, key){
        var marker = {
            location:{
                latitude: value.latitud,
                longitude: value.longitud
            },
            title: value.nombre,
            icon: value.icono,
            options: {
                draggable: false,
                labelContent: value.nombre,
                labelAnchor:"100",
                labelClass:"marker-labels"
            },
            events: {}
        }
        
        Markers.push(marker);
    });
  }
}

const name = 'mapa';

export default angular.module(name,[angularMeteor, 'nemLogging','uiGmapgoogle-maps'])
.component(name,{
    templateUrl:`imports/ui/components/${name}/${name}.html`,
    controllerAs:name,
    bindings:{
        tiendas:'='
    },
    controller:MapaTiendas
});