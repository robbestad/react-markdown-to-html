"use strict";

var React = require('react');
var marked = require('marked');
var _ = require('lodash.bind');
var $ = require('jquery');

module.exports = React.createClass({
    displayName: "Markdown2HTML",
    getInitialState: function () {
        return {
            md: ''
        };
    },
    componentDidMount: function () {
        $.get(this.props.src, _.bind(function(data) {
            this.setState({md: marked(data)});
        }, this));
    },
    render: function () {
        return React.createElement("div", {ref: "md", dangerouslySetInnerHTML: {__html: this.state.md}});
    }
});
