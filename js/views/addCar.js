var AddCarView = Backbone.View.extend({
  template: _.template($('#add-car-c').html()),
  events: {
    'click button#add-car': 'setValue'
  },
  initialize: function() {
    console.log('car view initialized!!!');
  },
  render: function() {
    this.$el.empty().append(this.template({}));
    return this;
  },
  setValue: function() {
    var name = $('#car-name').val();
    var model = $('#car-model').val();
    var color = $('#car-color').val();
    var cost = $('#car-cost').val();
    cars.create({
      name: name,
      model: model,
      color: color,
      cost: cost
    });
  }
});
