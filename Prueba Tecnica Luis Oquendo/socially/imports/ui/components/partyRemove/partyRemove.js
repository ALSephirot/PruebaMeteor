import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partyRemove.html';
import { Parties } from '../../../api/parties'

class PartyRemove{
    remove(){
        if(this.party){
            Parties.remove(this.party._id)
            console.log('remove party: ', this.party);
        }
    }
}

const name = 'partyRemove';

export default angular.module(name,[angularMeteor])
.component(name,{
    templateUrl:'imports/ui/components/partyRemove/partyRemove.html',
    bindings:{
        party: '<'
    },
    controllerAs: name,
    controller: PartyRemove
});