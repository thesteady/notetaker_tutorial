var React = require('react');
var Router = require('react-router');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
// manages user profile, repo data and notes data
  getInitialState: function() {
    // * initialize with empty data *
    return {
      notes: [1,2,3],
      bio: {name: 'pizza'},
      repos: ['a', 'b', 'c']
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
