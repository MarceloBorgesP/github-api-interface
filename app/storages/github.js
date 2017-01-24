import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return { 
      owner: 'marceloborgesp',
      repo: 'github-api-interface',
    };
  }
});

export default Storage;