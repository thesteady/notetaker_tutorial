var React = require('react');

var Repos = React.createClass({
  render: function() {
    return (
    	<div>
    		<p>REPOS HERE</p>
    		<p>{this.props.repos}</p>
    	</div>
    )
  }
});

module.exports = Repos;
