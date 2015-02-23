window.addEventListener('pageshow', function(/*event*/) {
  var visit = new Visit(document.documentURI, document.title);
  visit.save().then(function (response) {
    console.log(response);
  });
});
