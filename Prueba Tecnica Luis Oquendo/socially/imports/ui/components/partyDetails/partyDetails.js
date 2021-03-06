import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './partyDetails.html';
import { Parties } from '../../../api/parties';

class PartyDetails{
    constructor($stateParams, $scope, $reactive){
        'ngInject';
        
        $reactive(this).attach($scope);
        
        this.partyId = $stateParams.partyId;
        
        this.helpers({
            party(){
                return Parties.findOne({
                    _id:$stateParams.partyId
                });
            }
        });
        
    }
    
    save() {
        Parties.update({
            _id:this.party._id
        },{
            $set:{
                name:this.party.name,
                description: this.party.description
            }
        },(error)=>{
            if(error){
                console.log('no se pudo actualizar la fiesta');
            }
            else{
                console.log('Fiesta actualizada correctamente!');
            }
        })
    }
}

const name = 'partyDetails';

export default angular.module(name,[angularMeteor, uiRouter])
.component(name,{
    templateUrl:`imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: PartyDetails
})
.config(config);
 
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('partyDetails', {
    url: '/parties/:partyId',
    template: '<party-details></party-details>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}