import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonView(props) {
  if (props.component) {
    return props.component
  } else {
    return <button>{props.children}</button>
  }
}

ButtonView.propTypes = {
  component: PropTypes.element
};
