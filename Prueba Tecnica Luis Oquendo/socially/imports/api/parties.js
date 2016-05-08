import {Mongo} from 'meteor/mongo'

export const Parties = new Mongo.Collection('parties');

Parties.allow({
  insert(userId, party) {
    return true;//permissions logic
  },
  update(userId, party, fields, modifier) {
    return true;//permissions logic
  },
  remove(userId, party) {
    return true;//permissions logic
  }
});