var React = require('react');

var NotesList = React.createClass({
	render: function() {

		var notes = this.props.notes.map(function(note, i) {
			return (
				<li className="list-group-item" key={i}>
					{note['.value']}
				</li>
			);
		});

		return (
			<ul className="list-group">
				{notes}
			</ul>
		)
	}
});

module.exports = NotesList;