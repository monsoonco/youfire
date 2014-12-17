import DS from 'ember-data';

export default DS.Model.extend({
  isPlaying: DS.attr('boolean'),
  isMuted: DS.attr('boolean'),
  youtubeVideo: DS.belongsTo('video', { async: true })
});
