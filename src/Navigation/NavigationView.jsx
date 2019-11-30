import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationView(props) {
  return (
    <nav>
      <ul className='navigation'>
        <div className='logo'>{logo}</div>
        <div className='applicationName'>{applicationName}</div>
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