import React from 'react';

const UserProfile = ({bio}) => {
  return (
    <div>
      <h2>Profile</h2>
      <ul className="list-group">
        {bio.avatar_url && <li className="list-group-item profile-photo"><img src={bio.avatar_url} /></li>}
        {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
        {bio.login && <li className="list-group-item">Login: {bio.login}</li>}
        {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
        {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
        {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
        {bio.followers && <li className="list-group-item">Followers: {bio.followers}</li>}
        {bio.public_repos && <li className="list-group-item">Public Repos: {bio.public_repos}</li>}
        {bio.blog && <li className="list-group-item"><a href={bio.blog}>Blog</a></li>}
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object
}

export default UserProfile;
