import React from 'react';
import { shallow } from 'enzyme';
import NavigationView from './NavigationView.jsx';
import renderer from 'react-test-renderer';

describe('NavigationView', () => {
  test('snapshot', () => {
    const tree = renderer
      .create(newView())
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('all properties provided', () => {
    const wrapper = shallow(newView());
    expect(wrapper.find('ul.navigation li')).toHaveLength(2);
    expect(wrapper.find('ul.navigation li').at(0).text()).toBe('growme.fyi');
    expect(wrapper.find('ul.navigation li').at(1).text()).toBe('flash');
    expect(wrapper.find('ul.contextual li')).toHaveLength(1);
    expect(wrapper.find('ul.contextual li').at(0).text()).toBe('sign in');
  });

  test('no logo provided', () => {
    const wrapper = shallow(newView({ logo: undefined }));
    expect(wrapper.find('ul.navigation li')).toHaveLength(1);
    expect(wrapper.find('ul.navigation li').at(0).text()).toBe('flash');
  });

  test('no navigationalLinks provided', () => {
    const wrapper = shallow(newView({ navigationalLinks: undefined }));
    expect(wrapper.find('ul.navigation li')).toHaveLength(1);
    expect(wrapper.find('ul.navigation li').at(0).text()).toBe('growme.fyi');
  });

  test('no contextualLinks provided', () => {
    const wrapper = shallow(newView({ contextualLinks: undefined }));
    expect(wrapper.find('ul.contextual li')).toHaveLength(0);
  });
});

function newView(propsOverride) {
  const props = Object.assign({
    logo: <a href='#'><img src='https://assets.growme.fyi/logo_medium.jpg' />growme.fyi</a>,
    navigationalLinks: [ <a href='https://flash.growme.fyi'>flash</a> ],
    contextualLinks: [ <a href='#'>sign in</a> ],
  }, propsOverride);
  return <NavigationView {...props} />;
}