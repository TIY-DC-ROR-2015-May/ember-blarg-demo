import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
  host: 'http://localhost:3000'
})