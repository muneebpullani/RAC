
var CarCollection = Backbone.Collection.extend({
  model: Car,
  localStorage: new Backbone.LocalStorage('cars-backbone')
});
var cars = new CarCollection();
cars.fetch();
