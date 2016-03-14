import React from 'react';

const NotesList = ({notes}) => {
	var noteLis = notes.map((note, i) => {
		return <li className="list-group-item" key={i}>{note}</li>;
	});

	return <ul className="list-group">{noteLis}</ul>;
}

export default NotesList;