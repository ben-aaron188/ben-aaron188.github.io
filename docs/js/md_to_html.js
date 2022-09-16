$(document).ready(function() {

  var body_from_html = $("body").html();

  var converter = new showdown.Converter(),
    text = body_from_html,
    html_ = converter.makeHtml(text);
  $('body').html(html_);
});
