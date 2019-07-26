import React from 'react';
import PropTypes from 'prop-types'
import './style.css';

const filtersButtons = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed',
  },
]

const Footer = ({amount, filter, changeFilter}) => (
  <div className="todo-footer">
    <span className="todo-footer-info">{`${amount} Tasks left`}</span>
    <div className="todo-footer-buttons">
      {filtersButtons.map(({text, id}) => (
        <button
          key={id}
          onClick={() => changeFilter(id)}
          className={id === filter ? 'filter-btn active' : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Footer.defaultProps = {
  amount: 0,
  filter: '',
  changeFilter: () => {},
}


export default Footer;
