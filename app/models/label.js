import DS from 'ember-data';

export default DS.Model.extend({
    // issues: DS.hasMany('issue'),
    url: DS.attr('string'),
    name: DS.attr('string'),
    color: DS.attr('string'),
    default: DS.attr('boolean')
});
