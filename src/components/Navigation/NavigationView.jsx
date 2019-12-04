import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationView(props) {
  const navigationalLinks = props.navigationalLinks
    ? props.navigationalLinks.map((link, i) => <li key={i}>{link}</li>)
    : undefined;
  const contextualLinks = props.contextualLinks
    ? props.contextualLinks.map((link, i) => <li key={i}>{link}</li>)
    : undefined;
  return (
    <nav>
      <ul className='navigation'>
        {props.logo && <li className='logo'>{props.logo}</li>}
        {navigationalLinks}
      </ul>
      <ul className='contextual'>
        {contextualLinks}
      </ul>
    </nav>
  );
}

NavigationView.propTypes = {
  logo: PropTypes.element,
  navigationalLinks: PropTypes.arrayOf(PropTypes.element),
  contextualLinks: PropTypes.arrayOf(PropTypes.element)
};