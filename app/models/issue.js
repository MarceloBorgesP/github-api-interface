import DS from 'ember-data';

export default DS.Model.extend({
    url: DS.attr('string'),
    repository_url: DS.attr('string'),
    labels_url: DS.attr('string'),
    comments_url: DS.attr('string'),
    events_url: DS.attr('string'),
    html_url: DS.attr('string'),
    number: DS.attr('number'),
    title: DS.attr('string'),
    user: DS.belongsTo('user'),
    labels: DS.hasMany('label'),
    state: DS.attr('string'),
    locked: DS.attr('boolean'),
    assignee: DS.belongsTo('user'),
    assignees: DS.hasMany('user'),
    milestone: null,
    comments: DS.attr('number'),
    created_at: DS.attr('string'),
    updated_at: DS.attr('string'),
    closed_at: null,
    body: DS.attr('string')
});
