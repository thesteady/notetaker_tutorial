var React = require('react');
var Router = require('react-router');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');
var helpers = require('../utils/helpers');

var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
// manages user profile, repo data and notes data
  mixins: [ReactFireMixin],

  getInitialState: function() {
    // * initialize with empty data *
    return {
      notes: [1, 2, 3],
      bio: {},
      repos: []
    }
  },

  componentDidMount: function() {
    var firebaseUrl = 'https://notetakin-tutorial.firebaseio.com/';
    // var firebaseUrl = 'https://github-note-taker.firebaseio.com/';

    this.dataRef = new Firebase(firebaseUrl);
    this.init(this.props.params.username);
  },

  componentWillUnMount: function() {
    // Remove the firebase listener on notes:
    this.unbind('notes');
  },

  componentWillReceiveProps: function(nextProps) {
    // gets called whenever we change route
    this.unbind('notes'); //unbinds the previous users notes
    this.init(nextProps.params.username);
  },

  init: function(username) {
    // firebase: set a new node from the ref
    var childRef = this.dataRef.child(username);
    // a reactfiremixin function:
    // makes sure our state gets updated, too
    this.bindAsArray(childRef, 'notes');

    //fetch user's github info
    helpers.getGitHubInfo(username)
      .then(function(data) {
        this.setState({
          bio: data.bio, repos: data.repos
        });
      }.bind(this));
  },

  handleAddNote: function(newNote) {
    // update firebase with new note
    // append the new note to firebase
    var name = this.props.params.username;
    this.dataRef.child(name).child(this.state.notes.length).set(newNote)
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
          <Notes
            handleAddNote={this.handleAddNote}
            username={name}
            notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
