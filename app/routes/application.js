import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('video');
  },
  actions: {
    addVideo: function () {
      console.log('wat');
      var video = this.store.createRecord('video',{
        youtubeId: 'gKiaLSJW5xI'
      });
      video.save();
    }
  }
});
