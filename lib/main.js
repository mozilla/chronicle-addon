var tabs = require('sdk/tabs');
var prefs = require('sdk/simple-prefs').prefs;
var Request = require('sdk/request').Request;

function createVisit(tab) {
  console.log('create visit', tab.url);

  Request({
    url: prefs.url + 'v1/visits',
    contentType: 'application/json',
    content: JSON.stringify({ url: tab.url, title: tab.title, visitedAt: new Date() })
  }).post();
}

tabs.on('ready', createVisit);
