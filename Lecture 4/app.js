$("#send").click(function(event) {
  event.preventDefault();
  var title = $("#title-input").val();
  var text = $("#text-input").val();

  $("#title-input").val();
  $("#text-input").val();
  
  if (title && text) {
    var container = $("#articles");
    container.prepend('<article class="blog-post"><h3>'+title+'</h3><p>'+text+'</p></article>');
  }
});
