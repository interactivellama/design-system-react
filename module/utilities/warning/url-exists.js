/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */

/* global XMLHttpRequest, window */
// This function does an "AJAX" request to warn users on how to setup their icon path.
import warning from 'warning';

var urlExists = function urlExists() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};
  var hasExecuted; // Using XMLHttpRequest can cause problems in non-browser environments. This should be completely removed in production environment and should not execute in a testing environment.

  urlExists = function urlExists(control, url, comment) {
    if (!hasExecuted && !hasWarned["".concat(control, "-path")] && typeof window !== 'undefined' && XMLHttpRequest && process.env.NODE_ENV !== 'test') {
      var http = new XMLHttpRequest();
      http.open('GET', url, false);
      http.send();
      hasExecuted = true;

      if (http.status === 404) {
        var additionalComment = comment ? " ".concat(comment) : '';
        /* eslint-disable max-len */

        warning(!url, "The icon asset was not found at ".concat(url, ". Make sure the path to the icon asset is correct. You can set the icon path by importing the IconSettings component, `<IconSettings iconPath=[/assets/icons]>` from `components/iconSettings`, and wrap that component around your entire app or around individual components using icons. If you are using the `<Icon>` component, you can also pass the url to `this.props.path`.").concat(additionalComment));
        /* eslint-enable max-len */

        hasWarned["".concat(control, "-path")] = !!url;
      }
    }
  };
}

export default urlExists;
//# sourceMappingURL=url-exists.js.map