var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object
	},

  render: function() {
    return (
    	<div>
    		<h2>User Profile!</h2>
	    	<p>Username: {this.props.username}</p>
	    	<p>Bio: {this.props.bio.name} </p>
    	</div>
    );
  }
});

module.exports = UserProfile;
