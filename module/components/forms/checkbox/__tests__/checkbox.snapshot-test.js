import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../../tests/snapshot-helpers';
import CheckboxBase from '../__examples__/snapshot-base';
import CheckboxToggle from '../__examples__/snapshot-toggle';
test('Checkbox Base DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(CheckboxBase, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Checkbox Base HTML Snapshot', function () {
  expect(renderMarkup(CheckboxBase)).toMatchSnapshot();
});
test('Checkbox Toggle DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(CheckboxToggle, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Checkbox Toggle HTML Snapshot', function () {
  expect(renderMarkup(CheckboxToggle)).toMatchSnapshot();
});
//# sourceMappingURL=checkbox.snapshot-test.js.map