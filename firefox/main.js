/*eslint new-cap: 0*/

var pageMod = require('page-mod');
var self = require('self');

var contentScripts = [
  self.data.url('lib/p.js'),
  self.data.url('lib/almond.js'),
  self.data.url('content_scripts/config.js'),
  self.data.url('content_scripts/visit.js'),
  self.data.url('content_scripts/main.js')
];

pageMod.PageMod({
  include: '*',
  contentScriptFile: contentScripts,
  attachTo: ['top', 'existing'],
  onAttach: function(/*worker*/) {
  }
});
