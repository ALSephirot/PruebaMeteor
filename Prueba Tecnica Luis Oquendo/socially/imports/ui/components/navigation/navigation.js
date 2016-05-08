import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './navigation.html';

class Navigation{
    constructor(){
        this.VerMaestros = false;
        console.log("Usuario Logeado: ",Meteor.user());
    }
    
    
}

const name = 'navigation';

export default angular.module(name,[angularMeteor])
.component(name,{
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name
})