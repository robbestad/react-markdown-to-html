/** @jsx React.DOM */
"use strict";

if("undefined" == typeof React)
  var React = require('react');

var marked = require('marked');
var _ = require('lodash');

module.exports = React.createClass({displayName: "Markdown2HTML",

  getInitialState: function(){
    return {
      md: name
    };
  },
  componentDidMount: function() {
    $.get(this.props.file, _.bind(function(data) {
      this.setState({md: marked(data)});
    }, this));
  },

  // Render a title, the output portion, and the input portion.
  // This is a very simple demo and akin to the one on the React homepage
  render: function(){
    return (
        React.createElement("div", {dangerouslySetInnerHTML: {__html: (this.state.md)}})
    );
  }
});