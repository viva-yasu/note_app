// js/app.js

window.App = {};

$(function() {
  var noteCollection = new App.NoteCollection([{
    title: 'テスト',
    body: 'テストです'
  },{
    title: 'テスト1',
    body: 'テスト1です'
  }]);

  var mainContainer = new App.Container({
    el: '#main-container'
  });

  var noteListView = new App.NoteListView({
    collection: noteCollection
  });

  mainContainer.show(noteListView);
});

