var SERVER_URL = "https://chronicle.dev.mozaws.net";
var CREATE_VISIT_ENDPOINT = SERVER_URL + "/v1/visits";

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