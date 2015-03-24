"use strict";

var React = require('react');
var marked = require('marked');
var _ = require('lodash');
var $ = require('jquery');

module.exports = React.createClass({
    displayName: "Markdown2HTML",
    getInitialState: function () {
        return {
            md: ''
        };
    },
    componentWillMount: function () {
        $.get(this.props.src, _.bind(function(data) {
            this.setState({md: marked(data)});
        }, this));
    },
    render: function () {
        return React.createElement("div", {ref: "md", 
            dangerouslySetInnerHTML: {__html: this.state.md}});
    }
});
