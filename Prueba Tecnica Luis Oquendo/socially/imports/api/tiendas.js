import {Mongo} from 'meteor/mongo'

export const Tiendas = new Mongo.Collection('stores');

Tiendas.allow({
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