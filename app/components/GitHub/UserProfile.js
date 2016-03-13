var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object
	},

  render: function() {
    return (
    	<div>
    		<h2>Profile</h2>
        <ul className="list-group">
	    	  {this.props.bio.avatar_url && <li className="list-group-item profile-photo"><img src={this.props.bio.avatar_url} /></li>}
          {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
          {this.props.bio.login && <li className="list-group-item">Login: {this.props.bio.login}</li>}
          {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
          {this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
          {this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
          {this.props.bio.followers && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
          {this.props.bio.public_repos && <li className="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
          {this.props.bio.blog && <li className="list-group-item"><a href={this.props.bio.blog}>Blog</a></li>}

        </ul>
    	</div>
    );
  }
});

module.exports = UserProfile;
