// js/note_list_item.js

App.NoteListItemView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    var template = $('#noteListItemView-template').html();
    var compiled = _.template(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  }
});
