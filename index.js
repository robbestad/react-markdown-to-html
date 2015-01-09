/** @jsx React.DOM */
"use strict";

if("undefined" == typeof React)
  var React = require('react');

var marked = require('marked');
var _ = require('lodash');
var $ = require('jquery');

module.exports = React.createClass({displayName: "Markdown2HTML",
  getInitialState: function(){
    return {
      md: ''
    };
  },
  componentDidMount: function() {
    $.get(this.props.src, _.bind(function(data) {
      this.setState({md: marked(data)});
    }, this));
  },
  render: function(){
    return (
        React.createElement("div", {dangerouslySetInnerHTML: {__html: (this.state.md)}})
    );
  }
});
