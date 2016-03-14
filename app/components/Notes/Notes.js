import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({notes, username, handleAddNote}) => {
  return (
    <div>
    <h3>Notes for {username}</h3>
    <AddNote addNote={handleAddNote} />
    <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  handleAddNote: React.PropTypes.func.isRequired
}


export default Notes;


