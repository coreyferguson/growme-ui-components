import React from 'react';
import UnderConstructionPageView from './UnderConstructionPageView.jsx';
import renderer from 'react-test-renderer';

describe('UnderConstructionPageView', () => {
  test('snapshot', () => {
    const tree = renderer
      .create(<UnderConstructionPageView />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
