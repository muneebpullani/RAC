var MainView = Backbone.View.extend({
  el: 'body',
  events: {
    'click button#btn-view-car': 'viewCar',
    'click button#btn-add-car': 'addCar'
  },
  initialize: function() {
    console.log('main view initialized!!!');
    this.addCarView = new AddCarView();
    this.homeView = new HomeView();
    $.get({
      url: 'templates/mainView.html',
      success: this.loadTemplate,
      context: this,
      dataType: 'html'
    });
  },
  render: function() {
    this.$el.empty().append(this.template({}));
    this.$el.find('#main').empty().append(this.homeView.render().el);
    // $(body).html(this.$el);
    // this.addCarView.setElement(this.$('#main'));
  },
  loadTemplate: function(data) {
    this.template = _.template(data, {});
    this.render();
  },
  addCar: function() {
    this.$el.find('#main').empty().append(this.addCarView.render().el);
  },
  viewCar: function() {
    this.homeView.remove();
    this.$el.find('#main').empty().append(this.homeView.render().el);
  }
});
var mainView = new MainView();
