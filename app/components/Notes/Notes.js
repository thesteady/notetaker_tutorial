import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

var Notes = React.createClass({
	propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    handleAddNote: React.PropTypes.func.isRequired
	},

  render() {
    return (
    	<div>
    		<h3>Notes for {this.props.username}</h3>
        <AddNote addNote={this.props.handleAddNote} />
    		<NotesList notes={this.props.notes} />
    	</div>
    )
  }
});

module.exports = Notes;
