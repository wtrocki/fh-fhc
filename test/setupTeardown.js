var fhc = require("fhc.js");
var ini = require('utils/ini.js');
// Common wrappers
var before=before?before:function(){};
var after=after?after:function(){};

before(function(finish){
  fhc.load(function (er) {
    ini.set("feedhenry", "https://apps.feedhenry.com");
    ini.set("domain", "apps");      
    return finish(er);
  });
});

after(function(finish){
  console.log('Passed');
  return finish();
});
