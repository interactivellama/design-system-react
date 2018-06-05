/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver a warning message to the browser console about the component being a prototype component.
import lowPriorityWarning from './low-priority-warning';

var isPrototype = function isPrototype() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  isPrototype = function isPrototype(control, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';

    if (!hasWarned[control]) {
      /* eslint-disable max-len */
      lowPriorityWarning(false, "[Design System React] ".concat(control, " is a prototype. (a) Props may change within a minor release. (b) Web Content Accessibility Guidelines may not be met. (c) CSS imports may be required, since it is being added to SLDS.").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control] = true;
    }
  };
}

export default isPrototype;
//# sourceMappingURL=component-is-prototype.js.map