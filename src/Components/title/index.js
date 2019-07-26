import React from 'react';
import PropTypes from "prop-types";
import './style.css'

const Title = ({title}) => (
  <div className="title">{title}</div>
)

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'Title for task list',
}

export default Title