import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('cursor');
  },

  afterModel: function(model){
    return model.get('firstObject.youtubeVideo')
  },

  setupController: function(controller, model){
    controller.set('cursor', model.get('firstObject'));
  },

  actions: {
    addVideo: function(id) {
      var self = this;
      this.store.find('video').then(function(videos){
        if (videos.get('length') === 0){
          self._createVideo(id).then(function(video){
            self._createCursor(video);
          });
        } else {
          self._createVideo(id);
        }
      });
    }
  },

  _createVideo: function(id){
    return this.store.createRecord('video',{
      youtubeId: id
    }).save();
  },

  _createCursor: function(video){
    return this.store.createRecord('cursor',{
      youtubeVideo: video
    }).save();
  }
});
