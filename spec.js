var Markdown2Html = require("./index.js");
var React = require("react");
var assert = require("assert");
  describe('render markdown from README.md', function(){
    it('should render markdown', function(){
    var res=React.createElement(Markdown2Html, {src: "README.md"});
	    console.dir(res);
//      assert.equal(res._store, res);
  })
})

