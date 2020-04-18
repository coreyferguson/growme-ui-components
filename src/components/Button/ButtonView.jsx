import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonView(props) {
  if (props.icon) {
    return (
      <button className='icon'>
        <i className={`material-icons ${props.icon}`}>{props.icon}</i>
      </button>
    );
  } else if (props.component) {
    return props.component
  } else {
    return <button>{props.children}</button>
  }
}

ButtonView.propTypes = {
  component: PropTypes.element,
  icon: PropTypes.string
};
