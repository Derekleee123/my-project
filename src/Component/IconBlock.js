import React from 'react';
import PropTypes from 'prop-types';

function IconBlock({ title = '', icon = '', text = '' }) {
  return (
    <>
      <img src={icon} alt={title} />
      {text}
    </>
  );
}

IconBlock.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconBlock;
