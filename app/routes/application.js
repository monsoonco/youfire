import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('video');
  },
  actions: {
    addVideo: function(id) {
      var self = this;
      this.store.find('video').then(function(videos){
        self._createVideo(id).then(function(video){
          //if (videos.length === 0){
            self._createCursor(video);
          //}
        });
      });
    }
  },

  _createVideo: function(id){
    return this.store.createRecord('video',{
      youtubeId: 'XN5TG3kUoNE'
    }).save();
  },

  _createCursor: function(video){
    return this.store.createRecord('cursor',{
      youtubeVideo: video
    }).save();
  }
});
