import React from 'react';
import { StarFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

function AvatarVerticalCard({
  user = '', url = '', position = '', starCount = 0, text = '',
}) {
  const starElement = [];
  let index = 0;

  while (index < starCount) {
    starElement.push(`star_${index}`);
    index += 1;
  }

  return (
    <div className="card-frame flex-center-center">
      <div className="user-info flex-center-center">
        <img src={url} alt={user} />
        <h3>{user}</h3>
        <div>{position}</div>
      </div>
      <div className="feedback-info">
        <div className="star-frame">
          {starElement.map((star) => (
            <div key={star}>
              <StarFilled className="feedback-star" />
            </div>
          ))}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
}

AvatarVerticalCard.propTypes = {
  user: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starCount: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default AvatarVerticalCard;
