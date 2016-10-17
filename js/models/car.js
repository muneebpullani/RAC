
var Car = Backbone.Model.extend({
  defaults: {
    name: 'xxxxx',
    model: 'xxxxx',
    color: 'xxxxx',
    cost: 0,
    isBooked: false
  },
  initialize: function() {
    console.log('model car is created!');
  }
});
