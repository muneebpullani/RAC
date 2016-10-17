var HomeView = Backbone.View.extend({
  initialize: function() {
    console.log('homeView initialized');
    $.get({
      url: 'templates/card.html',
      success: this.loadTemplate,
      context: this,
      dataType: 'html'
    });
  },
  // model: JSON.stringify(cars.models[0]),
  render: function() {
    this.$el.empty();
    if(true){
      for (var i = 0; i < 1; i++) {
        this.$el.append(this.template( cars.models[i].toJSON() ));
      }
    }
    return this;
  },
  loadTemplate: function(data) {
    this.template = _.template( data );
  },
  removeView: function(){
    this.remove();
  }
});
