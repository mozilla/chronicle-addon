var SERVER_URL = 'https://chronicle.dev.mozaws.net';
var CREATE_VISIT_ENDPOINT = SERVER_URL + '/v1/visits';

function Visit(url, title, visitedAt) {
  this.url = url
  this.title = title;
  this.visitedAt = visitedAt || new Date().toISOString();
}

Visit.prototype.save = function() {
  var deferred = P.defer();
  var xhr = new XMLHttpRequest();
  var body = JSON.stringify({ url: this.url, title: this.title, visitedAt: this.visitedAt });
  xhr.open('POST', CREATE_VISIT_ENDPOINT, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        deferred.resolve(JSON.parse(xhr.responseText));
      }
      else if(xhr.status >= 400) {
        deferred.reject(xhr.responseText);
      }
    }
  }
  xhr.send(body);
  return deferred.promise;
}

