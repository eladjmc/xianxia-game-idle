import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBar = ({ fillColor, borderColor, data }) => {
  const { current, max } = data;
  const percentage = (current / max) * 100;

  return (
    <div className="progress-bar" style={{ borderColor: borderColor }}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${percentage}%`,
          backgroundColor: fillColor,
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  fillColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  data: PropTypes.shape({
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProgressBar;
