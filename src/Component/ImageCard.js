import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

function ImageCard({
  id = '', url = '', title = '', description = '', category = '', isLoading = true,
}) {
  return (
    <div className="image-card">
      <div className="image-frame flex-center-center">
        {isLoading ? <Spin /> : <img src={url} alt={id} />}
      </div>
      <div className="image-card-description flex-center-left">
        <h3>{title}</h3>
        <div>{description}</div>
        <div>{category}</div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ImageCard;
