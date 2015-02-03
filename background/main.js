var SERVER_URL = "https://chronicle.dev.mozaws.net";
var CREATE_VISIT_ENDPOINT = SERVER_URL + "/v1/visits";

function createVisit(historyItem) {
  console.log('create visit', historyItem);
  var xhr = new XMLHttpRequest();
  var visitedAt = new Date(historyItem.lastVisitTime);
  var body = JSON.stringify({ url: historyItem.url, title: historyItem.title, visitedAt: visitedAt.toISOString() });
  xhr.open("POST", CREATE_VISIT_ENDPOINT, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }
  xhr.send(body);
}

chrome.history.onVisited.addListener(createVisit)

