$('#ta').on("focus", function(e) {
  e.target.select();
  $(e.target).one('mouseup', function(e) {
    e.preventDefault();
  });
});