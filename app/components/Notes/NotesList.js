import React from 'react';

var NotesList = React.createClass({
	propTypes: {
		notes: React.PropTypes.array
	},

	render() {
		var notes = this.props.notes.map((note, i) => {
			return (
				<li className="list-group-item" key={i}>
					{note['.value']}
				</li>
			);
		});

		return <ul className="list-group">{notes}</ul>;
	}
});

module.exports = NotesList;