// js/note_list.js

App.NoteListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table',

  initialize: function(option) {
    this.collection = option.collection;
  },

  render: function() {
    var template = $('#noteListView-template').html();
    this.$el.html(template);

    this.renderItemViews();
    return this;
  },

  renderItemViews: function() {
    var $insertionPoint = this.$('.js-noteListItemView-container');

    this.collection.each(function(note) {
      var itemView = new App.NoteListItemView({
        model: note
      });
      $insertionPoint.append(itemView.render().$el);
    }, this);
  }
});
