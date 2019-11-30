import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationView(props) {
  const navigationLinks = props.navigationLinks
    ? props.navigationLinks.map((link, i) => <li key={i}>{link}</li>)
    : undefined;
  const contextualLinks = props.contextualLinks
    ? props.contextualLinks.map((link, i) => <li key={i}>{link}</li>)
    : undefined;
  return (
    <nav>
      <ul className='navigation'>
        <li className='logo'>{props.logo}</li>
        {navigationLinks}
      </ul>
      <ul className='contextual'>
        {contextualLinks}
      </ul>
    </nav>
  );
}

NavigationView.propTypes = {
  logo: PropTypes.element.isRequired,
  navigationalLinks: PropTypes.arrayOf(PropTypes.element),
  contextualLinks: PropTypes.arrayOf(PropTypes.element)
};