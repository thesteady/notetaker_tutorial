import React from 'react';
import Repos from './GitHub/Repos';
import UserProfile from './GitHub/UserProfile';
import Notes from './Notes/Notes';
import getGitHubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://notetakin-tutorial.firebaseio.com/');

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }

  componentDidMount() {
    this.init(this.props.params.username);
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    })

    //fetch user's github info
    getGitHubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      });
  }

  handleAddNote(newNote) {
    base.post(this.props.params.username, {data: this.state.notes.concat([newNote]) })
  }

  render() {
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
            handleAddNote={(newNote) => this.handleAddNote(newNote)}
            username={name}
            notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default Profile;