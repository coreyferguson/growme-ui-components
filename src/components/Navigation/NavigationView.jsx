import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationView(props) {
  return (
    <nav>
      <ul className='navigation'>
        <li className='logo'>{props.logo}</li>
        <li className='applicationName'>{props.applicationName}</li>
      </ul>
      <ul className='contextual'>
      </ul>
    </nav>
  );
}

NavigationView.propTypes = {
  logo: PropTypes.element.isRequired,
  applicationName: PropTypes.string.isRequired,
  navigationalLinks: PropTypes.arrayOf(PropTypes.element),
  contextualLinks: PropTypes.arrayOf(PropTypes.element)
};