import React from 'react';
import Style from './TextAndHeroStyle';

export default function TextAndHero(props) {
  return (
    <Style {...props}>
      <div className='navigation'>{props.navigation}</div>
      <div className='content'>
        <main>{props.main}</main>
        <figure>
          <div className='image'>&nbsp;</div>
          <figcaption>{props.imageCaption}</figcaption>
        </figure>
      </div>
    </Style>
  );
}

// TODO: PropTypes