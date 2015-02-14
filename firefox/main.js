var prefs = require('sdk/simple-prefs').prefs;

var pageMod = require("page-mod");

var self = require("self");

var contentScripts = [
  self.data.url("lib/p.js"),
  self.data.url("lib/almond.js"),
  self.data.url("content_scripts/visit.js"),
  self.data.url("content_scripts/main.js"),
];

console.log("asdadasdiaskldjkasjdkljasdjklalkjdaksjsd");

pageMod.PageMod({
  include: "*",
  contentScriptFile: contentScripts,
  attachTo: ["top", "existing"],
  onAttach: function(worker) {
  }
});
