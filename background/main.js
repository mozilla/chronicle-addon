var SERVER_URL = "https://chronicle.dev.mozaws.net";
var CREATE_VISIT_ENDPOINT = SERVER_URL + "/v1/visits";

function createVisit(tabId, changeInfo, tab) {
  // Filter out some visits:
  //   - with missing url
  //   - non-http urls, e.g., chrome:// or devtools://
  //   - to the chronicle web site
  if (!tab.url || !tab.url.match(/^http/) || tab.url.match(new RegExp('^'+SERVER_URL))) {
    return;
  }
  // wait until the tab finishes loading
  if (changeInfo.status !== 'complete') {
    return;
  }
  console.log('create visit', tab);
  var xhr = new XMLHttpRequest();
  var visitedAt = new Date();
  var body = JSON.stringify({ url: tab.url, title: tab.title, visitedAt: visitedAt.toISOString() });
  xhr.open("POST", CREATE_VISIT_ENDPOINT, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }
  xhr.send(body);
}

chrome.tabs.onUpdated.addListener(createVisit);

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ url: SERVER_URL+'/*' }, function (tabs) {
    // if we already have an open chronicle tab, navigate to it
    if (tabs.length > 0) {
      var target = tabs[0];
      chrome.windows.update(target.windowId, { focused: true }, function () {
        chrome.tabs.update(target.id, { active: true });
      });
    }
    // otherwise open a new tab to chronicle
    else {
      chrome.tabs.create( { url: SERVER_URL, active: true });
    }
  });
});