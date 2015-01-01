# Markdown to HTML

[React][1] Component that converts a Markdown file to HTML

Demo at [opensourceprojects.robbestad.com][2]

## Installation

    % npm install react-stickydiv --save

## Usage


#### With JSX

    var Markdown2HTML = require('react-markdown-to-html');
    MyComponent = React.createClass({
      render: function() {
         return (
           <Markdown2HTML file="README.md" />
        );
      }
    });

#### Without JSX

     var Markdown2HTML = require('react-markdown-to-html');
     MyComponent = React.createClass({displayName: "MyComponent",
       render: function() {
          return (
            React.createElement(Markdown2HTML, {file: "README.md"})
         );
       }
     });

[1]: https://facebook.github.io/react
[2]: http://opensourceprojects.robbestad.com