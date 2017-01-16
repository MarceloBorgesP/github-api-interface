import DS from 'ember-data';

export default DS.Model.extend({
    // issues: DS.hasMany('issue'),
    login: DS.attr('string'),
    avatar_url: DS.attr('string'),
    gravatar_id: DS.attr('string'),
    url: DS.attr('string'),
    html_url: DS.attr('string'),
    followers_url: DS.attr('string'),
    following_url: DS.attr('string'),
    gists_url: DS.attr('string'),
    starred_url: DS.attr('string'),
    subscriptions_url: DS.attr('string'),
    organizations_url: DS.attr('string'),
    repos_url: DS.attr('string'),
    events_url: DS.attr('string'),
    received_events_url: DS.attr('string'),
    type: DS.attr('string'),
    site_admin: DS.attr('boolean')
});
