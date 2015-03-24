"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var $ = _interopRequire(require("jquery"));

var React = require("react");

var marked = require("marked");
var _ = require("lodash");

module.exports = React.createClass({
    displayName: "Markdown2HTML",
    propTypes: {
        src: React.PropTypes.string.isRequired
    },
    getInitialState: function getInitialState() {
        return {
            md: ""
        };
    },
    componentWillMount: function componentWillMount() {
        $.get(this.props.src, _.bind(function (data) {
            this.setState({ md: marked(data) });
        }, this));
    },
    render: function render() {
        return React.createElement("div", { ref: "md", dangerouslySetInnerHTML: { __html: this.state.md } });
    }
});