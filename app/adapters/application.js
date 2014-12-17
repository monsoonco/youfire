import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://youfire.firebaseio.com")
});