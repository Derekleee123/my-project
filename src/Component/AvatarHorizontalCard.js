import React from 'react';
import PropTypes from 'prop-types';

function AvatarHorizontalCard({
  user = '', url = '', position = '', description = '', twitterLink = '', dribbbleLink = '', linkedinLink = '',
}) {
  return (
    <div className="card-frame flex-center-center">
      <div className="user-info flex-center-center">
        <img src={url} alt={user} />
        <h3>{user}</h3>
        <div>{position}</div>
      </div>
      <div className="description-frame flex-center-center">
        <div>{description}</div>
        <div className="link-frame flex-between-center">
          <a className="text-green" href={twitterLink} target="_blank" rel="noreferrer">Twitter</a>
          <a className="text-green" href={dribbbleLink} target="_blank" rel="noreferrer">Dribbble</a>
          <a className="text-green" href={linkedinLink} target="_blank" rel="noreferrer">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

AvatarHorizontalCard.propTypes = {
  user: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  dribbbleLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
};

export default AvatarHorizontalCard;
