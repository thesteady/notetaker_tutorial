var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
//manages user profile, repo data and notes data
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  render: function() {
    return (
      <div>this is a profile</div>
    )
  }
});

module.exports = Profile;
