var React = require('react');
var Router = require('react-router');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');

var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
// manages user profile, repo data and notes data
  mixins: [ReactFireMixin],

  getInitialState: function() {
    // * initialize with empty data *
    return {
      notes: [1, 2, 3],
      bio: {name: 'pizza'},
      repos: ['a', 'b', 'c']
    }
  },

  componentDidMount: function() {
    var firebaseUrl = 'https://notetakin-tutorial.firebaseio.com/';
    // var firebaseUrl = 'https://github-note-taker.firebaseio.com/';

    this.dataRef = new Firebase(firebaseUrl);
    // firebase: set a new node from the ref
    var childRef = this.dataRef.child(this.props.params.username);
    // a reactfiremixin function:
    this.bindAsArray(childRef, 'notes');
  },

  componentWillUnMount: function() {
    //remove the firebase listener on notes:
    this.unbind('notes');
  },

  render: function() {
    var name = this.props.params.username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={name} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={name} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={name} notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
